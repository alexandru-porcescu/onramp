import Vue from 'vue';

import CompletableButton from './Completables/CompletedButton.vue';
import CompletedBadge from './Completables/CompletedBadge.vue';
import CompletedCheckbox from './Completables/CompletedCheckbox.vue';
import DisplayCurrentTrack from './DisplayCurrentTrack';
import LanguageSwitcher from './LanguageSwitcher.vue';
import MenuDropdownItem from './Menu/MenuDropdownItem.vue';
import MenuDropdown from './Menu/MenuDropdown.vue';
import Modal from './Modal.vue';
import ModalMobileMenu from './ModalMobileMenu.vue';
import ModuleListing from './Modules/ModuleListing.vue';
import ModuleCard from './Modules/ModuleCard.vue';
import ResourceLanguagePreferenceSwitcher from './ResourceLanguagePreferenceSwitcher.vue';
import SelectDropdown from './SelectDropdown.vue';
import SitewideBanner from './SitewideBanner.vue';
import Tab from './Tabs/Tab.vue';
import Tabs from './Tabs/Tabs.vue';
import TabsWithSelect from './Tabs/TabsWithSelect.vue';
import Toast from './Toast.vue';
import ToggleWhenMobile from './ToggleWhenMobile.vue';

Vue.component('language-switcher', LanguageSwitcher);
Vue.component('toggle-when-mobile', ToggleWhenMobile);
Vue.component('resource-language-preference-switcher', ResourceLanguagePreferenceSwitcher);
Vue.component('display-current-track', DisplayCurrentTrack)
Vue.component('completed-badge', CompletedBadge);
Vue.component('completed-button', CompletableButton);
Vue.component('completed-checkbox', CompletedCheckbox);
Vue.component('toast', Toast);
Vue.component('menu-dropdown-item', MenuDropdownItem);
Vue.component('menu-dropdown', MenuDropdown);
Vue.component('modal', Modal);
Vue.component('modal-mobile-menu', ModalMobileMenu);
Vue.component('module-listing', ModuleListing);
Vue.component('module-card', ModuleCard);
Vue.component('select-dropdown', SelectDropdown);
Vue.component('sitewide-banner', SitewideBanner);
Vue.component('tab', Tab);
Vue.component('tabs', Tabs);
Vue.component('tabs-with-select', TabsWithSelect);
