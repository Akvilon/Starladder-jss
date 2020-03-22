import { createUseStyles } from "react-jss";
import { Theme, getWhiteColor, cardBoxShadow, getDarkGreyColor, getLightGreyColor, getBlackColor } from "../../styles";
import { relative } from "path";


export default createUseStyles((theme: Theme) => ({
    card: {
        flex: '0 1 calc(25 % - 2.188rem)',
        minWidth: '336px',
        height: '360px',
        background: getWhiteColor(theme),
        boxShadow: cardBoxShadow,
        border: '1px solid rgba(143, 154, 157, 0.2)',
        borderRadius: '2px',
        marginBottom: '2.188rem',
        transition: '0.3s',
        cursor: 'pointer',
        position: 'relative',

        '@media screen and (max-width: 768px)': {
            height: '225px',
            minWidth: '100%',
            marginBottom: '10px'
        }
    },
    cardMainIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        '& img': {
            '@media screen and (max-width: 768px)': {
                height: '138px'
            }
        }
        
    },
    cardTop: {
        height: '164px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px 25px 0px 25px',

        '@media screen and (max-width: 768px)': {
            height: 'auto',
            padding: '13px 15px 0px 13px'
        }
    },
    cardTopLink: {
        position: 'relative',
        '& a': {
            display: 'block',
            textAlign: 'right',
        },
        '& img': {
            paddingRight: '4px',

            '@media screen and (max-width: 768px)': {
                height: '25px',
                paddingRight: '6px'
            }
        },
        '& p': {
            paddingTop: '5px',
            textTransform: 'uppercase',
            color: getWhiteColor(theme),

            '@media screen and (max-width: 768px)': {
                textAlign: 'center',
                lineHeight: '0.938rem',
                padding: 0,
                paddingTop: '3px',
                width: '60%',
                marginLeft: 'auto'
            }
        }
    },
    cardDateTime: {
        position: 'relative',
        textAlign: 'right',

        '& p': {
            paddingTop: 0
        }
    },
    cardContent: {
        padding: '0px 25px 25px 25px',

        '@media screen and (max-width: 768px)': {
            padding: '0px 15px 15px 15px',
            position: 'relative'
        }
    },
    playersIcons: {
        display: 'flex',
        '& img': {
            marginRight: '15px'
        }
    },
    gameIcon: {
        paddingTop: '18px'
    },
    contentInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px',

        '@media screen and (max-width: 768px)': {
            marginTop: '0px'
        }
    },
    cardPlayersNames: {
        '& h5:last-child': {
            paddingTop: '5px',

            '@media screen and (max-width: 768px)': {
                paddingTop: '0px'
            }
        }
    },
    cardGroupsNames: {
        '& h5:last-child': {
            paddingTop: '5px',

            '@media screen and (max-width: 768px)': {
                paddingTop: '0px'
            }
        }
    },
    matchNumber: {
        height: '40px',
        width: '105px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F0F0F0',
        borderRadius: '4px',

        '& p': {
            color: getDarkGreyColor(theme),
        }
    },
    cardBets: {
        '& div': {
            background: getLightGreyColor(theme),
            border: '1px solid rgba(151, 151, 151, 0.1)',
            padding: '0px 10px',
            marginTop: '4px',

            '@media screen and (max-width: 768px)': {
                marginTop: '2px'
            },

            '& p': {
                color: getBlackColor(theme),
                textAlign: 'center',
                letterSpacing: '0.02rem',
                paddingTop: '2px'
            }
        },

        '& div:last-child': {
            marginTop: '10px'
        }
    },
    cardScore: {
        '& h5:last-child': {
            paddingTop: '5px',

            '@media screen and (max-width: 768px)': {
                paddingTop: '0px'
            }
        }
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',

        '@media screen and (max-width: 768px)': {
            marginTop: '5px'
        }
    },
    cardFooterInfo: {
        display: 'flex',

        '& img': {
            marginRight: '10px'
        }
    },
    cardFooterLogo: {
        paddingTop: '1px'
    }
}))