import React, {useMemo} from 'react';
import type {TextStyle} from 'react-native';
import type {CustomRendererProps, TPhrasing, TText} from 'react-native-render-html';
import GlobalCreateIcon from '@assets/images/customEmojis/global-create.svg';
import EmojiWithTooltip from '@components/EmojiWithTooltip';
import ImageSVG from '@components/ImageSVG';
import useThemeStyles from '@hooks/useThemeStyles';
import variables from '@styles/variables';
import CONST from '@src/CONST';

const emojiMap = {
    global_create: GlobalCreateIcon,
};
function EmojiRenderer({tnode, style: styleProp}: CustomRendererProps<TText | TPhrasing>) {
    const styles = useThemeStyles();
    let customEmojiFontSize = variables.fontSizeNormalHeight;
    const style = useMemo(() => {
        if ('islarge' in tnode.attributes) {
            customEmojiFontSize = styles.onlyEmojisText.fontSize;
            return [styleProp as TextStyle, styles.onlyEmojisText];
        }

        if ('ismedium' in tnode.attributes) {
            customEmojiFontSize = styles.emojisWithTextFontSize.fontSize;
            return [styleProp as TextStyle, styles.emojisWithTextFontSize, styles.verticalAlignTopText];
        }

        return null;
    }, [tnode.attributes, styles, styleProp]);

    if ('data' in tnode && !(tnode.data?.match(CONST.REGEX.ALL_EMOJIS) || Object.keys(emojiMap).includes(tnode.data.slice(1, tnode.data.length - 1)))) {
        return tnode.data;
    }
    if ('data' in tnode) {
        let data = tnode.data;
        if (!tnode.data?.match(CONST.REGEX.ALL_EMOJIS) && Object.keys(emojiMap).includes(tnode.data.slice(1, tnode.data.length - 1))) {
            data = (
                <ImageSVG
                    height={customEmojiFontSize}
                    width={customEmojiFontSize}
                    src={emojiMap['global_create']}
                />
            );
        }
        return (
            <EmojiWithTooltip
                style={[style, styles.cursorDefault, styles.emojiDefaultStyles]}
                emojiCode={data}
            />
        );
    }
    return '';
}

EmojiRenderer.displayName = 'EmojiRenderer';

export default EmojiRenderer;
