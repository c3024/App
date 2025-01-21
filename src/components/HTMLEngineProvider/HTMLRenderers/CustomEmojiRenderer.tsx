import React from 'react';
import type {FC} from 'react';
import type {CustomRendererProps, TPhrasing, TText} from 'react-native-render-html';
import {SvgProps} from 'react-native-svg';
import GlobalCreateIcon from '@assets/images/customEmoji/global-create.svg';
import CustomEmojiWithDefaultPressableAction from '@components/HTMLEngineProvider/CustomEmojiWithDefaultPressableAction';
import ImageSVG from '@components/ImageSVG';
import {PressableWithoutFeedback} from '@components/Pressable';
import FloatingActionEmoji from '@pages/home/sidebar/SidebarScreen/FloatingActionEmoji';
import variables from '@styles/variables';

export const emojiMap: Record<string, FC<SvgProps>> = {
    'action-menu-icon': GlobalCreateIcon,
};

function CustomEmojiRenderer({tnode}: CustomRendererProps<TText | TPhrasing>) {
    const emojiKey = tnode.attributes.emoji;
    if (emojiMap[emojiKey]) {
        if (!('pressablewithdefaultaction' in tnode.attributes)) {
            return (
                <ImageSVG
                    src={emojiMap[emojiKey]}
                    width={variables.iconSizeNormal}
                    height={variables.iconSizeNormal}
                />
            );
        }
        return <CustomEmojiWithDefaultPressableAction emojiKey={emojiKey} />;
    }
    return null;
}

export default CustomEmojiRenderer;
