pragma solidity >=0.4.5;


contract LemonadeStand {
    address Owner; // address of owner

    uint256 skuCount; // Stock unit count

    enum State {ForSale, Sold} // for checking state of particular product

    struct Item {
        // info of all the elements or actions
        string name;
        uint256 sku;
        uint256 price;
        State state;
        address seller;
        address buyer;
    }

    mapping(uint256 => Item) items; // for storing data of drink as hashmap

    event ForSale(uint256 skuCount); //

    event Sold(uint256 sku); //

    modifier onlyOwner() {
        require(msg.sender == Owner, "owner not authorised!");
        _;
    }

    modifier verifyCaller(address _address) {
        require(msg.sender == _address, "verifies if the address is correct");
        _;
    }

    modifier paidEnough(uint256 _price) {
        require(
            msg.value >= _price,
            "Check if price is enough or not for seller"
        );
        _;
    }

    modifier forSale(uint256 _sku) {
        require(
            items[_sku].state == State.ForSale,
            "If item is available or not"
        );
        _;
    }

    modifier sold(uint256 _sku) {
        require(items[_sku].state == State.Sold, "if item is not available");
        _;
    }


    constructor() public{
        Owner = msg.sender;
        skuCount = 0;
    }



}
