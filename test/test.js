const Lemonade = artifacts.require('Lemonade');

contract('Lemonade', () => {
   it('must pass this stuff', async () => {
      const lemonade = await Lemonade.deployed();
      await lemonade.addItem('Keyboard', 2000);
      const result = await lemonade.fetchItem(1);
      console.log(result);
      assert(result.name === 'Keyboard');
   });
});
