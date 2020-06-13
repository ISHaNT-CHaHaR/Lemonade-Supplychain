const Lemonade = artifacts.require('Lemonade'); // creating artifact od contract

contract('Lemonade', () => {
   let lemonade = null;
   before('Everything', async () => {
      lemonade = await Lemonade.deployed(); // just a JSON object will not deploy it.
   });

   it('must pass this stuff', async () => {
      await lemonade.addItem('LiMoN', 100);

      await lemonade.addItem('Juice', 150);
      const result = await lemonade.fetchItem(1);
      console.log(result);

      assert(result.name === 'LiMoN');
   });

   it('If item bought or not', async () => {
      await lemonade.buyItem(2);
      const res = await lemonade.fetchItem(2);
      console.log(res);
      assert(res.stateIs === 'SOLD');
   });

   // it('If item shipped or not', async () => {
   //    await lemonade.shipItem(2);
   //    const product = await lemonade.fetchItem(2);

   //    assert(product.stateIs === 'Shipped');
   // });
});
