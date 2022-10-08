import React from "react";
import Nft from "./Nft";

const NftList = ({ nftBalance }) => {
    const children = []
    for(const {uri, tokens} of nftBalance) {
        for(const token of tokens) {
            children.push(
                <Nft
                uri={uri}
                token={token}
                key={token+uri}
                />
            )
        }
    }
    return <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "16px"
    }}>{children}</div>
}

export default NftList