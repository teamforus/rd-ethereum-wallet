module.exports = { abi: 
   [ { constant: true,
       inputs: [ { name: '_key', type: 'bytes32' } ],
       name: 'getKey',
       outputs: 
        [ { name: 'purposes', type: 'uint256[]' },
          { name: 'keyType', type: 'uint256' },
          { name: 'key', type: 'bytes32' } ],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_key', type: 'bytes32' },
          { name: '_purpose', type: 'uint256' },
          { name: '_keyType', type: 'uint256' } ],
       name: 'addKey',
       outputs: [ { name: 'success', type: 'bool' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: false,
       inputs: [ { name: '_claimId', type: 'bytes32' } ],
       name: 'removeClaim',
       outputs: [ { name: 'success', type: 'bool' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_key', type: 'bytes32' },
          { name: '_purpose', type: 'uint256' } ],
       name: 'removeKey',
       outputs: [ { name: 'success', type: 'bool' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_id', type: 'uint256' },
          { name: '_approve', type: 'bool' } ],
       name: 'approve',
       outputs: [ { name: 'success', type: 'bool' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [ { name: '_topic', type: 'uint256' } ],
       name: 'getClaimIdsByTopic',
       outputs: [ { name: 'claimIds', type: 'bytes32[]' } ],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_topic', type: 'uint256' },
          { name: '_scheme', type: 'uint256' },
          { name: '_issuer', type: 'address' },
          { name: '_signature', type: 'bytes' },
          { name: '_data', type: 'bytes' },
          { name: '_uri', type: 'string' } ],
       name: 'addClaim',
       outputs: [ { name: 'claimRequestId', type: 'uint256' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_to', type: 'address' },
          { name: '_value', type: 'uint256' },
          { name: '_data', type: 'bytes' } ],
       name: 'execute',
       outputs: [ { name: 'executionId', type: 'uint256' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [ { name: '_claimId', type: 'bytes32' } ],
       name: 'getClaim',
       outputs: 
        [ { name: 'topic', type: 'uint256' },
          { name: 'scheme', type: 'uint256' },
          { name: 'issuer', type: 'address' },
          { name: 'signature', type: 'bytes' },
          { name: 'data', type: 'bytes' },
          { name: 'uri', type: 'string' } ],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: 
        [ { name: '_claimId', type: 'bytes32' },
          { name: '_topic', type: 'uint256' },
          { name: '_scheme', type: 'uint256' },
          { name: '_issuer', type: 'address' },
          { name: '_signature', type: 'bytes' },
          { name: '_data', type: 'bytes' },
          { name: '_uri', type: 'string' } ],
       name: 'changeClaim',
       outputs: [ { name: 'success', type: 'bool' } ],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [ { name: '_purpose', type: 'uint256' } ],
       name: 'keysByPurpose',
       outputs: [ { name: 'keys', type: 'bytes32[]' } ],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { inputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' },
     { payable: true, stateMutability: 'payable', type: 'fallback' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'key', type: 'bytes32' },
          { indexed: true, name: 'purpose', type: 'uint256' },
          { indexed: true, name: 'keyType', type: 'uint256' } ],
       name: 'KeyAdded',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'key', type: 'bytes32' },
          { indexed: true, name: 'purpose', type: 'uint256' },
          { indexed: true, name: 'keyType', type: 'uint256' } ],
       name: 'KeyRemoved',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'executionId', type: 'uint256' },
          { indexed: true, name: 'to', type: 'address' },
          { indexed: true, name: 'value', type: 'uint256' },
          { indexed: false, name: 'data', type: 'bytes' } ],
       name: 'ExecutionRequested',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'executionId', type: 'uint256' },
          { indexed: true, name: 'to', type: 'address' },
          { indexed: true, name: 'value', type: 'uint256' },
          { indexed: false, name: 'data', type: 'bytes' } ],
       name: 'Executed',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'executionId', type: 'uint256' },
          { indexed: false, name: 'approved', type: 'bool' } ],
       name: 'Approved',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'claimRequestId', type: 'uint256' },
          { indexed: true, name: 'topic', type: 'uint256' },
          { indexed: false, name: 'scheme', type: 'uint256' },
          { indexed: true, name: 'issuer', type: 'address' },
          { indexed: false, name: 'signature', type: 'bytes' },
          { indexed: false, name: 'data', type: 'bytes' },
          { indexed: false, name: 'uri', type: 'string' } ],
       name: 'ClaimRequested',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'claimId', type: 'bytes32' },
          { indexed: true, name: 'topic', type: 'uint256' },
          { indexed: false, name: 'scheme', type: 'uint256' },
          { indexed: true, name: 'issuer', type: 'address' },
          { indexed: false, name: 'signature', type: 'bytes' },
          { indexed: false, name: 'data', type: 'bytes' },
          { indexed: false, name: 'uri', type: 'string' } ],
       name: 'ClaimAdded',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'claimId', type: 'bytes32' },
          { indexed: true, name: 'topic', type: 'uint256' },
          { indexed: false, name: 'scheme', type: 'uint256' },
          { indexed: true, name: 'issuer', type: 'address' },
          { indexed: false, name: 'signature', type: 'bytes' },
          { indexed: false, name: 'data', type: 'bytes' },
          { indexed: false, name: 'uri', type: 'string' } ],
       name: 'ClaimRemoved',
       type: 'event' },
     { anonymous: false,
       inputs: 
        [ { indexed: true, name: 'claimId', type: 'bytes32' },
          { indexed: true, name: 'topic', type: 'uint256' },
          { indexed: false, name: 'scheme', type: 'uint256' },
          { indexed: true, name: 'issuer', type: 'address' },
          { indexed: false, name: 'signature', type: 'bytes' },
          { indexed: false, name: 'data', type: 'bytes' },
          { indexed: false, name: 'uri', type: 'string' } ],
       name: 'ClaimChanged',
       type: 'event' } ],
  bin: '0x608060405234801561001057600080fd5b5073__IdentityLib.sol:IdentityLib___________638a4167fa600033604051602001808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156100bd5780518252602082019150602081019050602083039250610098565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206001806040518563ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180858152602001846000191660001916815260200183815260200182815260200194505050505060206040518083038186803b15801561015a57600080fd5b505af415801561016e573d6000803e3d6000fd5b505050506040513d602081101561018457600080fd5b81019080805190602001909291905050505061168a806101a56000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312aaac70146100b15780631d3812401461014d5780634eee424a146101aa57806353d413c5146101f3578063747442d31461024657806380e9e9e114610297578063b1a34e0d14610319578063b61d27f614610456578063c9100bcb146104fd578063db6a20a5146106c0578063f29ce10d1461080f575b005b3480156100bd57600080fd5b506100e06004803603810190808035600019169060200190929190505050610891565b60405180806020018481526020018360001916600019168152602001828103825285818151815260200191508051906020019060200280838360005b8381101561013757808201518184015260208101905061011c565b5050505090500194505050505060405180910390f35b34801561015957600080fd5b5061019060048036038101908080356000191690602001909291908035906020019092919080359060200190929190505050610957565b604051808215151515815260200191505060405180910390f35b3480156101b657600080fd5b506101d96004803603810190808035600019169060200190929190505050610b13565b604051808215151515815260200191505060405180910390f35b3480156101ff57600080fd5b5061022c600480360381019080803560001916906020019092919080359060200190929190505050610be5565b604051808215151515815260200191505060405180910390f35b34801561025257600080fd5b5061027d60048036038101908080359060200190929190803515159060200190929190505050610d98565b604051808215151515815260200191505060405180910390f35b3480156102a357600080fd5b506102c260048036038101908080359060200190929190505050610e6f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103055780820151818401526020810190506102ea565b505050509050019250505060405180910390f35b34801561032557600080fd5b506104406004803603810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610ee1565b6040518082815260200191505060405180910390f35b34801561046257600080fd5b506104e7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611133565b6040518082815260200191505060405180910390f35b34801561050957600080fd5b5061052c6004803603810190808035600019169060200190929190505050611297565b604051808781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156105b2578082015181840152602081019050610597565b50505050905090810190601f1680156105df5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156106185780820151818401526020810190506105fd565b50505050905090810190601f1680156106455780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561067e578082015181840152602081019050610663565b50505050905090810190601f1680156106ab5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b3480156106cc57600080fd5b506107f560048036038101908080356000191690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506114e8565b604051808215151515815260200191505060405180910390f35b34801561081b57600080fd5b5061083a600480360381019080803590602001909291905050506115ec565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561087d578082015181840152602081019050610862565b505050509050019250505060405180910390f35b606060008060008001600085600019166000191681526020019081526020016000206002016000800160008660001916600019168152602001908152602001600020600001546000800160008760001916600019168152602001908152602001600020600101548280548060200260200160405190810160405280929190818152602001828054801561094357602002820191906000526020600020905b81548152602001906001019080831161092f575b505050505092509250925092509193909250565b600073__IdentityData.sol:IdentityData_________63bd08af0e60003360016040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060206040518083038186803b158015610a0257600080fd5b505af4158015610a16573d6000803e3d6000fd5b505050506040513d6020811015610a2c57600080fd5b810190808051906020019092919050505015610b0c5773__IdentityLib.sol:IdentityLib___________638a4167fa60008686866040518563ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180858152602001846000191660001916815260200183815260200182815260200194505050505060206040518083038186803b158015610ace57600080fd5b505af4158015610ae2573d6000803e3d6000fd5b505050506040513d6020811015610af857600080fd5b810190808051906020019092919050505090505b9392505050565b600073__ClaimHolderLib.sol:ClaimHolderLib_____63731ee7fe600060046002866040518563ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180858152602001848152602001838152602001826000191660001916815260200194505050505060206040518083038186803b158015610ba357600080fd5b505af4158015610bb7573d6000803e3d6000fd5b505050506040513d6020811015610bcd57600080fd5b81019080805190602001909291905050509050919050565b600073__IdentityData.sol:IdentityData_________63bd08af0e60003360016040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060206040518083038186803b158015610c9057600080fd5b505af4158015610ca4573d6000803e3d6000fd5b505050506040513d6020811015610cba57600080fd5b810190808051906020019092919050505015610d925773__IdentityLib.sol:IdentityLib___________634a08d4a7600085856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018360001916600019168152602001828152602001935050505060206040518083038186803b158015610d5457600080fd5b505af4158015610d68573d6000803e3d6000fd5b505050506040513d6020811015610d7e57600080fd5b810190808051906020019092919050505090505b92915050565b600073__IdentityLib.sol:IdentityLib___________63588e54b960006004600287876040518663ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180868152602001858152602001848152602001838152602001821515151581526020019550505050505060206040518083038186803b158015610e2c57600080fd5b505af4158015610e40573d6000803e3d6000fd5b505050506040513d6020811015610e5657600080fd5b8101908080519060200190929190505050905092915050565b606060026001016000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610ed557602002820191906000526020600020905b81546000191681526020019060010190808311610ebd575b50505050509050919050565b600073__ClaimHolderLib.sol:ClaimHolderLib_____63035fe9ae6000600460028b8b8b8b8b8b6040518a63ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808a81526020018981526020018881526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610fcc578082015181840152602081019050610fb1565b50505050905090810190601f168015610ff95780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015611032578082015181840152602081019050611017565b50505050905090810190601f16801561105f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561109857808201518184015260208101905061107d565b50505050905090810190601f1680156110c55780820380516001836020036101000a031916815260200191505b509c5050505050505050505050505060206040518083038186803b1580156110ec57600080fd5b505af4158015611100573d6000803e3d6000fd5b505050506040513d602081101561111657600080fd5b810190808051906020019092919050505090509695505050505050565b600073__IdentityLib.sol:IdentityLib___________63462f908b600060048787876040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112055780820151818401526020810190506111ea565b50505050905090810190601f1680156112325780820380516001836020036101000a031916815260200191505b50965050505050505060206040518083038186803b15801561125357600080fd5b505af4158015611267573d6000803e3d6000fd5b505050506040513d602081101561127d57600080fd5b810190808051906020019092919050505090509392505050565b6000806000606080606060006002600001600089600019166000191681526020019081526020016000209050806001015481600201548260030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836004018460050185600601828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113935780601f1061136857610100808354040283529160200191611393565b820191906000526020600020905b81548152906001019060200180831161137657829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561142f5780601f106114045761010080835404028352916020019161142f565b820191906000526020600020905b81548152906001019060200180831161141257829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114cb5780601f106114a0576101008083540402835291602001916114cb565b820191906000526020600020905b8154815290600101906020018083116114ae57829003601f168201915b505050505090509650965096509650965096505091939550919395565b6000803388604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083101515611583578051825260208201915060208101905060208303925061155e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050886000191681600019161415156115cc57600091506115e0565b6115da888888888888610ee1565b50600191505b50979650505050505050565b60606000600101600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561165257602002820191906000526020600020905b8154600019168152602001906001019080831161163a575b505050505090509190505600a165627a7a72305820e07808e912311c30e01d0096e458565f269815841cd4b784b8e1eddcf5df67570029' }