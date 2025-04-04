# Contract CounterService



> CounterService

A service contract for managing token exchanges and payments

*Handles USDC to F3 token exchanges and payment services for consultation and minting*

<br />

---

<br />

[**Functions**](#functions)

[**Events**](#events)

[**Errors**](#errors)

<br />

---

<br />

## Functions

1. [consultPrice()](#function-consultprice) <br />
1. [exchange(uint256)](#function-exchangeuint256) <br />
1. [exchangeRate()](#function-exchangerate) <br />
1. [f3Token()](#function-f3token) <br />
1. [getCurrentReceiptId()](#function-getcurrentreceiptid) <br />
1. [mintingPrice()](#function-mintingprice) <br />
1. [owner()](#function-owner) <br />
1. [payForConsult()](#function-payforconsult) <br />
1. [payForMinting()](#function-payforminting) <br />
1. [renounceOwnership()](#function-renounceownership) <br />
1. [setExchangeRate(uint256)](#function-setexchangerateuint256) <br />
1. [setF3Token(address)](#function-setf3tokenaddress) <br />
1. [setPrices(uint256,uint256)](#function-setpricesuint256uint256) <br />
1. [setUSDCToken(address)](#function-setusdctokenaddress) <br />
1. [transferOwnership(address)](#function-transferownershipaddress) <br />
1. [usdcToken()](#function-usdctoken) <br />
1. [withdraw(address,address,uint256)](#function-withdrawaddressaddressuint256) <br />

<br />

---

<br />

### Function consultPrice()

```solidity
function consultPrice() external view returns (uint256)
```

Price in F3 tokens for consultation service




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

<br />

---

<br />

### Function exchange(uint256)

```solidity
function exchange(uint256 usdcAmount) external nonpayable
```

Exchanges USDC tokens for F3 tokens



#### Parameters

| Name | Type | Description |
|---|---|---|
| usdcAmount | uint256 | Amount of USDC tokens to exchange |

<br />

---

<br />

### Function exchangeRate()

```solidity
function exchangeRate() external view returns (uint256)
```

Exchange rate for USDC to F3 conversion (1 USDC = exchangeRate F3)




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

<br />

---

<br />

### Function f3Token()

```solidity
function f3Token() external view returns (contract F3)
```

Address of the F3 token contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract F3 | undefined |

<br />

---

<br />

### Function getCurrentReceiptId()

```solidity
function getCurrentReceiptId() external view returns (uint256)
```

Returns the current receipt ID




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Current value of the receipt ID counter |

<br />

---

<br />

### Function mintingPrice()

```solidity
function mintingPrice() external view returns (uint256)
```

Price in F3 tokens for minting service




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### Function payForConsult()

```solidity
function payForConsult() external nonpayable returns (uint256)
```

Pays for consultation service with F3 tokens




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Receipt ID for the payment |

<br />

---

<br />

### Function payForMinting()

```solidity
function payForMinting() external nonpayable returns (uint256)
```

Pays for minting service with F3 tokens




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Receipt ID for the payment |

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

### Function setExchangeRate(uint256)

```solidity
function setExchangeRate(uint256 _rate) external nonpayable
```

Updates the exchange rate for USDC to F3 conversion



#### Parameters

| Name | Type | Description |
|---|---|---|
| _rate | uint256 | New exchange rate (1 USDC = _rate F3) |

<br />

---

<br />

### Function setF3Token(address)

```solidity
function setF3Token(address _f3Token) external nonpayable
```

Updates the F3 token contract address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _f3Token | address | New address of the F3 token contract |

<br />

---

<br />

### Function setPrices(uint256,uint256)

```solidity
function setPrices(uint256 _consultPrice, uint256 _mintingPrice) external nonpayable
```

Updates the prices for consultation and minting services



#### Parameters

| Name | Type | Description |
|---|---|---|
| _consultPrice | uint256 | New price for consultation in F3 tokens |
| _mintingPrice | uint256 | New price for minting in F3 tokens |

<br />

---

<br />

### Function setUSDCToken(address)

```solidity
function setUSDCToken(address _usdcToken) external nonpayable
```

Updates the USDC token contract address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _usdcToken | address | New address of the USDC token contract |

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

### Function usdcToken()

```solidity
function usdcToken() external view returns (contract IERC20)
```

Address of the USDC token contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

<br />

---

<br />

### Function withdraw(address,address,uint256)

```solidity
function withdraw(address token, address to, uint256 amount) external nonpayable
```

Withdraws tokens from the contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| token | address | Address of the token to withdraw |
| to | address | Address to receive the tokens |
| amount | uint256 | Amount of tokens to withdraw |





<br />

---

<br />

## Events

1. [ConsultPaid](#event-consultpaid) <br />
1. [Exchange](#event-exchange) <br />
1. [MintingPaid](#event-mintingpaid) <br />
1. [OwnershipTransferred](#event-ownershiptransferred) <br />
1. [PriceUpdated](#event-priceupdated) <br />
1. [Withdraw](#event-withdraw) <br />

<br />

---

<br />

### Event ConsultPaid

```solidity
event ConsultPaid(address indexed user, uint256 receiptId)
```

Emitted when a consultation payment is made



#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | Address of the user making the payment |
| receiptId  | uint256 | Unique identifier for the payment receipt |

<br />

---

<br />

### Event Exchange

```solidity
event Exchange(address indexed user, uint256 usdcAmount, uint256 f3Amount)
```

Emitted when USDC is exchanged for F3 tokens



#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | Address of the user performing the exchange |
| usdcAmount  | uint256 | Amount of USDC tokens exchanged |
| f3Amount  | uint256 | Amount of F3 tokens received |

<br />

---

<br />

### Event MintingPaid

```solidity
event MintingPaid(address indexed user, uint256 receiptId)
```

Emitted when a minting payment is made



#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | Address of the user making the payment |
| receiptId  | uint256 | Unique identifier for the payment receipt |

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

<br />

---

<br />

### Event PriceUpdated

```solidity
event PriceUpdated(string service, uint256 newPrice)
```

Emitted when service prices are updated



#### Parameters

| Name | Type | Description |
|---|---|---|
| service  | string | Name of the service (consult/minting) |
| newPrice  | uint256 | New price in F3 tokens |

<br />

---

<br />

### Event Withdraw

```solidity
event Withdraw(address indexed token, address indexed to, uint256 amount)
```

Emitted when tokens are withdrawn from the contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | address | Address of the token being withdrawn |
| to `indexed` | address | Address receiving the tokens |
| amount  | uint256 | Amount of tokens withdrawn |




<br />

---

<br />

## Errors

1. [F3TransferFailed](#error-f3transferfailed) <br />
1. [InsufficientF3Balance](#error-insufficientf3balance) <br />
1. [InvalidExchangeRate](#error-invalidexchangerate) <br />
1. [InvalidPrice](#error-invalidprice) <br />
1. [USDCTransferFailed](#error-usdctransferfailed) <br />
1. [WithdrawFailed](#error-withdrawfailed) <br />

<br />

---

<br />

### Error F3TransferFailed 


```solidity
error F3TransferFailed()
```






<br />

---

<br />

### Error InsufficientF3Balance 


```solidity
error InsufficientF3Balance()
```






<br />

---

<br />

### Error InvalidExchangeRate 


```solidity
error InvalidExchangeRate()
```






<br />

---

<br />

### Error InvalidPrice 


```solidity
error InvalidPrice()
```






<br />

---

<br />

### Error USDCTransferFailed 


```solidity
error USDCTransferFailed()
```






<br />

---

<br />

### Error WithdrawFailed 


```solidity
error WithdrawFailed()
```







