import cardLogoOnline from './assets/card_logo_online.svg';
import cardLogoUpcoming from './assets/card_logo_upcoming.svg';
import cardLogoPassed from './assets/card_logo_passed.svg';
import watchIcon from './assets/watch_icon.svg';
import playerIcon1 from './assets/player_icon_1.svg';
import playerIcon2 from './assets/player_icon_2.svg';
import playerIcon3 from './assets/player_icon_3.svg';
import playerIcon4 from './assets/player_icon_4.svg';
import playerIcon5 from './assets/player_icon_5.svg';
import playerIcon6 from './assets/player_icon_6.svg';
import playerIcon7 from './assets/player_icon_7.svg';
import ggbetLogo from './assets/ggbet_logo.svg';
import battleIcon from './assets/battle_icon.svg';
import battleCupIcon from './assets/battle_cup_icon.svg';
import { CardModel } from './models/CardModel';


export const matchesList = [
    {
        mainIcon: cardLogoOnline,
        title: 'Asia Minor: Play-Off',
        isLink: true,
        info: {
            top: watchIcon,
            label: 'watch live!'
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon1,
            secondPlayer: playerIcon2,
            gameIcon: undefined
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Albert Warren',
                defeated: false,
            },
            secondPlayer: {
                name: 'Gloria Henry',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: false,
        playersInfo: {
            firstPlayerBet: '3.22',
            secondPlayerBet: '53.22',
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: 'Bo 3',
            logo: ggbetLogo,
        }
    },

    {
        mainIcon: cardLogoUpcoming,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon3,
            secondPlayer: playerIcon4,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Regina Watson',
                defeated: false,
            },
            secondPlayer: {
                name: 'Kathryn Jones',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: false,
        playersInfo: {
            firstPlayerBet: '3.22',
            secondPlayerBet: '53.22',
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5 hours 39 min • Bо 3',
            logo: ggbetLogo,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon2,
            secondPlayer: playerIcon5,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Ricardo Hawkins',
                defeated: false,
            },
            secondPlayer: {
                name: 'Bruce Simmmons',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: false,
        playersInfo: {
            firstPlayerBet: '3.22',
            secondPlayerBet: '53.22',
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5 hours 39 min • Bо 3',
            logo: ggbetLogo,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon6,
            secondPlayer: playerIcon7,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Jenny Bell',
                defeated: false,
            },
            secondPlayer: {
                name: 'Arlene Robertson',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: false,
        playersInfo: {
            firstPlayerBet: '3.22',
            secondPlayerBet: '53.22',
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5 hours 39 min • Bо 3',
            logo: ggbetLogo,
        }
    },

    {
        mainIcon: cardLogoPassed,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon1,
            secondPlayer: playerIcon3,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Courtney Alexander',
                defeated: true,
            },
            secondPlayer: {
                name: 'Judith Nguyen',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: true,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: '0',
            secondPlayerScore: '3',
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: '1:0 • 1:0 • 1:0',
            logo: ggbetLogo,
        }
    },
    {
        mainIcon: cardLogoPassed,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon1,
            secondPlayer: playerIcon4,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Priscilla Fisher',
                defeated: false,
            },
            secondPlayer: {
                name: 'Arlene Black',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: true,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: '3',
            secondPlayerScore: '0',
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: '1:0 • 1:0 • 1:0',
            logo: ggbetLogo,
        }
    },
    {
        mainIcon: cardLogoPassed,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon5,
            secondPlayer: playerIcon7,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Cody Howard',
                defeated: false,
            },
            secondPlayer: {
                name: 'Brandon Mccoy',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: true,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: '0',
            secondPlayerScore: '3',
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: '1:0 • 1:0 • 1:0',
            logo: ggbetLogo,
        }
    },
    {
        mainIcon: cardLogoPassed,
        title: 'Asia Minor: Play-Off',
        isLink: false,
        info: {
            top: '19:00',
            label: '29 октября',
        },
        isPlayersIcons: true,
        icons: {
            firstPlayer: playerIcon1,
            secondPlayer: playerIcon6,
            gameIcon: undefined,
        },
        isGroupNames: false,
        names: {
            firstPlayer: {
                name: 'Jorge Fox',
                defeated: false,
            },
            secondPlayer: {
                name: 'Zack Miles',
                defeated: false,
            },
            firstGroup: undefined,
            secondGroup: undefined,
        },
        isPlayersInfo: true,
        isScore: true,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: '0',
            secondPlayerScore: '3',
        },
        match: {
            label: undefined,
            number: undefined,
        },
        footer: {
            icon: undefined,
            label: '1:0 • 1:0 • 1:0',
            logo: ggbetLogo,
        }
    },

]

export const battlesList = [
    {
        mainIcon: cardLogoOnline,
        title: 'Group Stage',
        isLink: true,
        info: {
            top: watchIcon,
            label: 'watch live!'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '1',
        },
        footer: {
            icon: undefined,
            label: 'Map: Erangel',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '2',
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5h 39min • Map: Erangel',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '3',
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5h 39min • Map: Erangel',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '4',
        },
        footer: {
            icon: undefined,
            label: 'Starts in: 5h 39min • Map: Erangel',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '5',
        },
        footer: {
            icon: battleCupIcon,
            label: 'Natus Vincere (A) - 233pts',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '6',
        },
        footer: {
            icon: battleCupIcon,
            label: 'Natus Vincere (A) - 233pts',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '7',
        },
        footer: {
            icon: battleCupIcon,
            label: 'Natus Vincere (A) - 233pts',
            logo: undefined,
        }
    },
    {
        mainIcon: cardLogoUpcoming,
        title: 'Group Stage',
        isLink: false,
        info: {
            top: '19:00',
            label: 'March 8'
        },
        isPlayersIcons: false,
        icons: {
            firstPlayer: undefined,
            secondPlayer: undefined,
            gameIcon: battleIcon
        },
        isGroupNames: true,
        names: {
            firstPlayer: {
                name: undefined,
                defeated: false,
            },
            secondPlayer: {
                name: undefined,
                defeated: false,
            },
            firstGroup: 'Group A',
            secondGroup: 'Group B',
        },
        isPlayersInfo: false,
        isScore: false,
        playersInfo: {
            firstPlayerBet: undefined,
            secondPlayerBet: undefined,
            firstPlayerScore: undefined,
            secondPlayerScore: undefined,
        },
        match: {
            label: 'match',
            number: '8',
        },
        footer: {
            icon: battleCupIcon,
            label: 'Natus Vincere (A) - 233pts',
            logo: undefined,
        }
    },
]