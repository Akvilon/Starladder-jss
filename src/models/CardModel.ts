

export type CardModel = {
    mainIcon: string,
    title: string,
    isLink: boolean;
    info: {
        top: string,
        label: string,
    },
    isPlayersIcons: boolean,
    icons: {
        firstPlayer: string | undefined,
        secondPlayer: string | undefined,
        gameIcon: string | undefined
    },
    isGroupNames: boolean;
    names: {
        firstPlayer: {
            name: string | undefined,
            defeated: boolean,
        },
        secondPlayer: {
            name: string | undefined,
            defeated: boolean,
        },
        firstGroup: string | undefined,
        secondGroup: string | undefined,
    },
    isPlayersInfo: boolean,
    isScore: boolean,
    playersInfo: {
        firstPlayerBet: string | undefined,
        secondPlayerBet: string | undefined,
        firstPlayerScore: string | undefined,
        secondPlayerScore: string | undefined,
    },
    match: {
        label: string | undefined,
        number: string | undefined,
    },
    footer: {
        icon: string | undefined,
        label: string | undefined,
        logo: string | undefined,
    }
}
