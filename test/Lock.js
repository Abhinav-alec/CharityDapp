const { expect } = require("chai");
const hre = require("hardhat");
const ethers = hre.ethers;

describe("chai Contract", function () {
  let chai;
  let owner, tipper1, tipper2;

  beforeEach(async function () {
    [owner, tipper1, tipper2] = await ethers.getSigners();
    const ChaiFactory = await ethers.getContractFactory("chai");
    chai = await ChaiFactory.deploy();
    await chai.waitForDeployment();
  });

  it("should allow users to buy chai and store memos", async function () {
    const tipAmount = ethers.parseEther("1");

    await expect(
      chai.connect(tipper1).buychai("Alice", "Great chai!", {
        value: tipAmount,
      })
    ).to.changeEtherBalance(owner, tipAmount);

    const memos = await chai.getMemos();
    expect(memos.length).to.equal(1);
    expect(memos[0].name).to.equal("Alice");
    expect(memos[0].message).to.equal("Great chai!");
    expect(memos[0].from).to.equal(tipper1.address);
  });

  it("should revert if 0 ETH is sent", async function () {
    await expect(
      chai.connect(tipper1).buychai("Bob", "Nice!", { value: 0 })
    ).to.be.revertedWith("Please pay more than 0 ether");
  });

  it("should store multiple memos", async function () {
    const tipAmount = ethers.parseEther("0.5");

    await chai
      .connect(tipper1)
      .buychai("User1", "First tip!", { value: tipAmount });
    await chai
      .connect(tipper2)
      .buychai("User2", "Second tip!", { value: tipAmount });

    const memos = await chai.getMemos();
    expect(memos.length).to.equal(2);
    expect(memos[0].name).to.equal("User1");
    expect(memos[1].name).to.equal("User2");
  });
});
