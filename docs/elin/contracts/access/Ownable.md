# Contract Ownable







*Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions. By default, the owner account will be the one that deploys the contract. This can later be changed with {transferOwnership}. This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be applied to your functions to restrict their use to the owner.*

<br />

---

<br />

[**Functions**](#functions)

[**Events**](#events)


<br />

---

<br />

## Functions

1. [owner()](#function-owner) <br />
1. [renounceOwnership()](#function-renounceownership) <br />
1. [transferOwnership(address)](#function-transferownershipaddress) <br />

<br />

---

<br />

### Function owner()

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

<br />

---

<br />

### Function renounceOwnership()

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.*


<br />

---

<br />

### Function transferOwnership(address)

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |





<br />

---

<br />

## Events

1. [OwnershipTransferred](#event-ownershiptransferred) <br />

<br />

---

<br />

### Event OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



