<template>
  <div class="my-recipe__container">
    <HamburgerMenu></HamburgerMenu>
    <SideMenu></SideMenu>
    <div class="my-recipe__footer">
      <Footer></Footer>
    </div><!-- my-recipe__footer -->
  </div><!-- my-recipe__container -->
</template>

<script>
import HamburgerMenu from '../menu/HamburgerMenu'
import SideMenu from '../menu/SideMenu'
import Footer from '../menu/FooterMenu'

export default {
  components: {
    HamburgerMenu,
    SideMenu,
    Footer
  }
}
</script>