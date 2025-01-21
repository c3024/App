import React from 'react';
import type {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import GlobalCreateIcon from '@assets/images/customEmoji/global-create.svg';
import ImageSVG from '@components/ImageSVG';
import {PressableWithoutFeedback} from '@components/Pressable';
import variables from '@styles/variables';

type CustomEmojiWithDefaultPressableActionProps = {
    emojiKey: string;
};

const emojiMap: Record<string, FC<SvgProps>> = {
    'action-menu-icon': GlobalCreateIcon,
};

function CustomEmojiWithDefaultPressableAction({emojiKey}: CustomEmojiWithDefaultPressableActionProps) {
    return (
        <PressableWithoutFeedback 
            onPress={() => console.log(`Pressed emoji with key: ${emojiKey}`)}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel='Press to create a new item'
        >
            <ImageSVG
                src={emojiMap[emojiKey]}
                width={variables.iconSizeNormal}
                height={variables.iconSizeNormal}
            />
        </PressableWithoutFeedback>
    );
}

export default CustomEmojiWithDefaultPressableAction;
