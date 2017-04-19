/**
 * Define your plugins here. Just uncomment when you need it.
 * To improve application performance, you need to disable components you dont' need.
 * Plase note, when you enabling/disabling the component, make sure it's styles
 * also enabled/disabled. The CSS is imported via app.scss file under src/assets/styles directory.
 *
 * TODO: Move this to somewhere, so we can define the components even easier.
 */

import Vue from 'vue'
import MdCore from 'vue-material/dist/components/mdCore'
// import MdAvatar from 'vue-material/dist/components/mdAvatar'
import MdBackdrop from 'vue-material/dist/components/mdBackdrop'
// import MdBottomBar from 'vue-material/dist/components/mdBottomBar'
import MdButton from 'vue-material/dist/components/mdButton'
// import MdButtonToggle from 'vue-material/dist/components/mdButtonToggle'
// import MdCard from 'vue-material/dist/components/mdCard'
// import MdCheckbox from 'vue-material/dist/components/mdCheckbox'
// import MdChips from 'vue-material/dist/components/mdChips'
// import MdDialog from 'vue-material/dist/components/mdDialog'
import MdDivider from 'vue-material/dist/components/mdDivider'
// import MdFile from 'vue-material/dist/components/mdFile'
import MdIcon from 'vue-material/dist/components/mdIcon'
// import MdImage from 'vue-material/dist/components/mdImage'
import MdInputContainer from 'vue-material/dist/components/mdInputContainer'
import MdLayout from 'vue-material/dist/components/mdLayout'
import MdList from 'vue-material/dist/components/mdList'
// import MdMenu from 'vue-material/dist/components/mdMenu'
// import MdProgress from 'vue-material/dist/components/mdProgress'
// import MdRadio from 'vue-material/dist/components/mdRadio'
// import MdSelect from 'vue-material/dist/components/mdSelect'
import MdSidenav from 'vue-material/dist/components/mdSidenav'
// import MdSnackbar from 'vue-material/dist/components/mdSnackbar'
// import MdSpeedDial from 'vue-material/dist/components/mdSpeedDial'
// import MdSpinner from 'vue-material/dist/components/mdSpinner'
// import MdSubheader from 'vue-material/dist/components/mdSubheader'
// import MdSwitch from 'vue-material/dist/components/mdSwitch'
// import MdTable from 'vue-material/dist/components/mdTable'
// import MdTabs from 'vue-material/dist/components/mdTabs'
import MdToolbar from 'vue-material/dist/components/mdToolbar'
// import MdTooltip from 'vue-material/dist/components/mdTooltip'
import MdWhiteframe from 'vue-material/dist/components/mdWhiteframe'

const Plugins = {
  MdCore,
  // MdAvatar,
  MdBackdrop,
  // MdBottomBar,
  MdButton,
  // MdButtonToggle,
  // MdCard,
  // MdCheckbox,
  // MdChips,
  // MdDialog,
  MdDivider,
  // MdFile,
  MdIcon,
  // MdImage,
  MdInputContainer,
  MdLayout,
  MdList,
  // MdMenu,
  // MdProgress,
  // MdRadio,
  // MdSelect,
  MdSidenav,
  // MdSnackbar,
  // MdSpeedDial,
  // MdSpinner,
  // MdSubheader,
  // MdSwitch,
  // MdTable,
  // MdTabs,
  MdToolbar,
  // MdTooltip,
  MdWhiteframe,

  install (Vue) {
    for (let component in Plugins) {
      const componentInstaller = Plugins[component]

      if (componentInstaller && component !== 'install') {
        Vue.use(componentInstaller)
      }
    }
  }
}

Vue.use(Plugins)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  }
})
