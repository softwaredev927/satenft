import {
  sateNFT as SateContract,
  Approval,
  ApprovalForAll,
  SateContractDeployed,
  SateCreatorUpdated,
  SateInfoUpdated,
  SateTokenUriUpdated,
  Transfer
} from "../generated/sateNFT/sateNFT"
import { Sate } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let sate = Sate.load(event.params.tokenId.toString())
  if (!sate) {
    sate = new Sate(event.params.tokenId.toString())

    let sateContract = SateContract.bind(event.address)
    let sateInfo = sateContract.sateInfo(event.params.tokenId)
    sate.launchTime = sateInfo.value2
    sate.launchPrice = sateInfo.value3
    sate.apr = sateInfo.value5
  }
  sate.save()
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleSateContractDeployed(event: SateContractDeployed): void {}

export function handleSateCreatorUpdated(event: SateCreatorUpdated): void {}

export function handleSateInfoUpdated(event: SateInfoUpdated): void {
  let entity = Sate.load(event.params._tokenId.toString())
  entity.launchTime = event.params._launchTime
  entity.launchPrice = event.params._launchPrice
  entity.apr = event.params._apr
  entity.save()
}

export function handleSateTokenUriUpdated(event: SateTokenUriUpdated): void {}

export function handleTransfer(event: Transfer): void {
  let sate = Sate.load(event.params.tokenId.toString())
  if (!sate) {
    sate = new Sate(event.params.tokenId.toString())

    let sateContract = SateContract.bind(event.address)
    let sateInfo = sateContract.sateInfo(event.params.tokenId)
    sate.launchTime = sateInfo.value2
    sate.launchPrice = sateInfo.value3
    sate.apr = sateInfo.value5
  }
  sate.save()
}
