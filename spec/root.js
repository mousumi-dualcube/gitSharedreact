import 'normalize.css';
import React, { Component } from 'react';



import { Layout, Panel, NavDrawer } from '../components/layout';
import AppBar from '../components/app_bar';
import ButtonToolbox from '../components/button';
import Autocomplete from './components/autocomplete';
import AppBarTest from './components/app_bar';
import Avatar from './components/avatar';
import FontIcon from './components/font_icon';
import BaseComponent from './components/base_component';
import Button from './components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
import Chip from './components/chip';
import Dialog from './components/dialog';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import IconMenu from './components/icon_menu';
import InputTest from './components/input';
import Menu from './components/menu';
import Pickers from './components/pickers';
import Progress from './components/progress';
import Radio from './components/radio';
import Slider from './components/slider';
import Snackbar from './components/snackbar';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tooltip from './components/tooltip';
import List from './components/list';
import style from './style.css';
import {TilesCard, DplCard} from '../components/dpl_card';
import cardOptions from './cardData.json';

class Root extends Component {
  state = { pinned: false };

  render() {
    return (
      <Layout>
        <AppBar
          title={`React Toolbox Spec ${VERSION}`}
          onLeftIconClick={this.handleSideBarToggle}
          className={style.appbar}
          leftIcon="menu"
          fixed
          flat
        >
          <ButtonToolbox
            className={style.github}
            href="http://react-toolbox.com/#/"
            target="_blank"
            icon="web"
            floating
            accent
          />
        </AppBar>

        <NavDrawer
          active={this.state.pinned}
          onEscKeyDown={this.handleSideBarToggle}
          onOverlayClick={this.handleSideBarToggle}
          permanentAt="lg"
        >
          This will content filter and indexes for examples
        </NavDrawer>

        <Panel className={style.app}>

          <br/><br/><br/><br/>
          {cardOptions.map((element, index) => {
            if(element.type == 'product') {
              return <DplCard option={element} key={index} pattern="grid"></DplCard>
            }
          })}
          <br/><br/>           
          <Autocomplete />
          <AppBarTest />
          <Avatar />
          <FontIcon />
          {/* <BaseComponent /> */}
          <Button />
          <Card />
          <Checkbox />
          <Chip />
          <Dialog />
          <Drawer />
          <Dropdown />
          <IconMenu />
          <InputTest />
          <List />
          <Menu />
          <Pickers />
          <Progress />
          <Radio />
          <Slider />
          <Snackbar />
          <Switch />
          <Table />
          <Tabs />
          <Tooltip /> 
        </Panel>
      </Layout>
    );
  }
}

export default Root;