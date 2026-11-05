import test from 'node:test';
import assert from 'node:assert/strict';
import {instalment,budget,depositPlan} from '../src/calculations.js';

test('repayments amortise the principal to zero',()=>{
  for(const [price,deposit,rate,years] of [[60000,6000,5,7],[100000,20000,3.5,9],[35000,0,8,3]]){
    const result=instalment(price,deposit,rate,years);
    let balance=price-deposit;
    for(let m=0;m<years*12;m++)balance=balance*(1+rate/1200)-result.monthly;
    assert.ok(Math.abs(balance)<1e-6);
    assert.ok(result.total>result.principal);
  }
});
test('zero rate and fully paid vehicle do not produce NaN',()=>{
  assert.equal(instalment(12000,0,0,5).monthly,200);
  assert.equal(instalment(12000,12000,5,5).monthly,0);
});
test('invalid money, rates and periods are rejected',()=>{
  for(const args of [[0,0,5,7],[5000,6000,5,7],[5000,-1,5,7],[5000,0,-1,7],[5000,0,5,0],[5000,0,5,10],[NaN,0,5,7]])assert.throws(()=>instalment(...args),RangeError);
});
test('budget preserves a deficit instead of implying affordability',()=>{
  assert.equal(budget(4500,1600,1600,500),800);
  assert.equal(budget(3000,1600,1600,500),-700);
  assert.throws(()=>budget(3000,-1,0,0),RangeError);
});
test('deposit schedule rounds up and handles an achieved target',()=>{
  assert.deepEqual(depositPlan(6000,1500,500),{remaining:4500,months:9,progress:25});
  assert.equal(depositPlan(6000,1500,400).months,12);
  assert.deepEqual(depositPlan(6000,7000,500),{remaining:0,months:0,progress:100});
  assert.throws(()=>depositPlan(6000,0,0),RangeError);
});
