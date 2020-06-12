const Lemonade = artifacts.require('Lemonade');

contract('Lemonade', () => {
   it('must pass this stuff', async () => {
      const lemonade = await Lemonade.deployed();
      await lemonade.addItem('LiMoN', 100);
      const result = await lemonade.fetchItem(1);

      assert(result.sku.toNumber() === 1);
      assert(result.name === 'LiMoN');
   });

   it('If item bought or not', async () => {
      const lemonade = await Lemonade.deployed();
      await lemonade.buyItem(2);
      const res = await lemonade.fetchItem(1);
      console.log(res);
      assert(res.sku.toNumber() === 1);
   });
});
