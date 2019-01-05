import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
        
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alerts';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func
    };

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes', { title: 'Themes' } )
    };

    handleSitePress = () => {
        Linking.openURL('htop://fixer.io').catch(() => {
            this.props.alertWithType('error', 'Sorry', 'Fixer.io can\'t be opened')
        })
    };

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                    onPress={this.handleThemesPress} />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    customIcon={
                        <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
                    }
                    onPress={this.handleSitePress} />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);
