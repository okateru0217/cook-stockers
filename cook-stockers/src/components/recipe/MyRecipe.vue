<template>
  <div class="my-recipe__container">
    <HamburgerMenu></HamburgerMenu>
    <SideMenu></SideMenu>
  </div><!-- my-recipe__container -->
</template>

<script>
import HamburgerMenu from '../menu/HamburgerMenu'
import SideMenu from '../menu/SideMenu'

export default {
  components: {
    HamburgerMenu,
    SideMenu
  }
}
</script>