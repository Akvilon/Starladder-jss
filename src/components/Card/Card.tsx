import React from 'react';
import useStyles from './Card.styles';
import { useTheme } from 'react-jss';
import { CardModel } from '../../models/CardModel';
import { H5 } from '../../utils/H5';
import { Caption } from '../../utils/Caption';


type CardProps = {
    item: CardModel
}

const Card: React.FC<CardProps> = ({ item }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const renderLink = () => {
        return (
            <div className={classes.cardTopLink}>
                <a href="https://www.youtube.com/watch?v=12A2hXdde2s" target='_blank'>
                    <img src={item.info.top} alt="watch now icon" />
                    <Caption title={item.info.label} accent={false} />
                </a>
            </div>
        )
    }

    const renderDateTime = () => {
        return (
            <div className={classes.cardDateTime}>
                <H5 title={item.info.top} />
                <Caption title={item.info.label} accent={false} />
            </div>
        )
    }

    const renderPlayersIcons = () => {
        return (
            <div className={classes.playersIcons}>
                <img src={item.icons.firstPlayer} alt="icon" />
                <img src={item.icons.secondPlayer} alt="icon" />
            </div>
        )
    }

    const renderGameIcon = () => {
        return (
            <div className={classes.gameIcon}>
                <img src={item.icons.gameIcon} alt="icon" />
            </div>
        )
    }

    const renderPlayersNames = () => {
        let defeated;
        if (item.playersInfo.firstPlayerScore &&
            item.playersInfo.secondPlayerScore &&
            item.playersInfo.firstPlayerScore >
            item.playersInfo.secondPlayerScore) {
            return (
                <div className={classes.cardPlayersNames}>
                    <H5 title={item.names.firstPlayer.name} />
                    <H5 defeated={true} title={item.names.secondPlayer.name} />
                </div>
            )
        } else {
            return (
                <div className={classes.cardPlayersNames}>
                    <H5 defeated={true} title={item.names.firstPlayer.name} />
                    <H5 title={item.names.secondPlayer.name} />
                </div>
            )
        }

    }

    const renderGroupsNames = () => {
        return (
            <div className={classes.cardGroupsNames}>
                <H5 title={item.names.firstGroup} />
                <H5 title={item.names.secondGroup} />
            </div>
        )
    }

    const renderPlayersInfo = () => {
        return (
            <>
                {
                    item.isScore ? renderScore() : renderBets()
                }
            </>
        )
    }

    const renderBattleMatchInfo = () => {
        return (
            <div className={classes.matchNumber}>
                <Caption title={`${item.match.label} #${item.match.number}`} accent={true} />
            </div>
        )
    }

    const renderBets = () => {
        return (
            <div className={classes.cardBets}>
                <div>
                    <Caption title={item.playersInfo.firstPlayerBet} accent={true} />
                </div>
                <div>
                    <Caption title={item.playersInfo.secondPlayerBet} accent={true} />
                </div>
            </div>
        )
    }

    const renderScore = () => {
        if (item.playersInfo.firstPlayerScore &&
            item.playersInfo.secondPlayerScore &&
            item.playersInfo.firstPlayerScore >
            item.playersInfo.secondPlayerScore) {
            return (
                <div className={classes.cardScore}>
                    <H5 title={item.playersInfo.firstPlayerScore} />
                    <H5 defeated={true} title={item.playersInfo.secondPlayerScore} />
                </div>
            )
        } else {
            return (
                <div className={classes.cardScore}>
                    <H5 defeated={true} title={item.playersInfo.firstPlayerScore} />
                    <H5 title={item.playersInfo.secondPlayerScore} />
                </div>
            )
        }

    }


    return (
        <div className={classes.card}>
            <div className={classes.cardMainIcon}>
                <img src={item.mainIcon} alt="main logo" />
            </div>
            <div className={classes.cardTop}>
                <Caption title={item.title} accent={false} />
                {
                    item.isLink ? renderLink() : renderDateTime()
                }
            </div>
            <div className={classes.cardContent}>
                {
                    item.isPlayersIcons ? renderPlayersIcons() : renderGameIcon()
                }
                <div className={classes.contentInfo}>
                    {
                        item.isGroupNames ? renderGroupsNames() : renderPlayersNames()
                    }

                    {
                        item.isPlayersInfo ? renderPlayersInfo() : renderBattleMatchInfo()
                    }

                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.cardFooterInfo}>
                        {
                            item.footer.icon &&
                            <img src={item.footer.icon} alt="cup icon" />
                        }
                        <Caption title={item.footer.label} accent={false} />
                    </div>
                    {
                        item.footer.logo &&
                        <div className={classes.cardFooterLogo}>
                            <img src={item.footer.logo} alt="footer logo" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export { Card };