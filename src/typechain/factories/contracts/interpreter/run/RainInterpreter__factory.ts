/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RainInterpreter,
  RainInterpreterInterface,
} from "../../../../contracts/interpreter/run/RainInterpreter";

const _abi = [
  {
    inputs: [],
    name: "storageOpcodesRange",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pointer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "length",
            type: "uint256",
          },
        ],
        internalType: "struct StorageOpcodesRange",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class RainInterpreter__factory {
  static readonly abi = _abi;
  static createInterface(): RainInterpreterInterface {
    return new utils.Interface(_abi) as RainInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RainInterpreter {
    return new Contract(address, _abi, signerOrProvider) as RainInterpreter;
  }
}
