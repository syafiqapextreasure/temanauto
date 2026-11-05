export function instalment(price,deposit,annualRate,years){
  if(![price,deposit,annualRate,years].every(Number.isFinite)||price<=0||deposit<0||deposit>price||annualRate<0||annualRate>100||years<=0||years>9)throw new RangeError('Semak harga, deposit, kadar dan tempoh. Deposit tidak boleh melebihi harga kereta.');
  const principal=price-deposit,months=Math.round(years*12),r=annualRate/1200;
  const monthly=r===0?principal/months:principal*r/(1-Math.pow(1+r,-months));
  return {principal,monthly,total:monthly*months};
}
export function budget(income,commitments,living,savings){if(![income,commitments,living,savings].every(n=>Number.isFinite(n)&&n>=0))throw new RangeError('Masukkan jumlah sah yang tidak negatif.');return income-commitments-living-savings;}
export function depositPlan(target,saved,monthly){if(![target,saved,monthly].every(Number.isFinite)||target<=0||saved<0||monthly<=0)throw new RangeError('Sasaran dan simpanan bulanan mestilah lebih daripada sifar.');const remaining=Math.max(0,target-saved);return{remaining,months:Math.ceil(remaining/monthly),progress:Math.min(100,saved/target*100)};}
