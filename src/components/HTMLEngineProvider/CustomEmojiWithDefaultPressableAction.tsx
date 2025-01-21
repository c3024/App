import React, {useContext} from 'react';
import type {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import GlobalCreateIcon from '@assets/images/customEmoji/global-create.svg';
import ImageSVG from '@components/ImageSVG';
import {PressableWithoutFeedback} from '@components/Pressable';
import variables from '@styles/variables';
import { emojiMap } from '@components/HTMLEngineProvider/HTMLRenderers/CustomEmojiRenderer';
import {FABPopoverContext} from '@components/FABPopoverProvider';

type CustomEmojiWithDefaultPressableActionProps = {
    emojiKey: string;
};

function CustomEmojiWithDefaultPressableAction({emojiKey}: CustomEmojiWithDefaultPressableActionProps) {
    const image = <ImageSVG
                    src={emojiMap[emojiKey]}
                    width={variables.iconSizeNormal}
                    height={variables.iconSizeNormal}
                />;

    const {isCreateMenuActive, setIsCreateMenuActive} = useContext(FABPopoverContext);
    
    if (emojiKey === 'action-menu-icon') {
        return (
            <PressableWithoutFeedback 
                onPress={() => setIsCreateMenuActive(!isCreateMenuActive)}
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
    return image;
}

export default CustomEmojiWithDefaultPressableAction;
