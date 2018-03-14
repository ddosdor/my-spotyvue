<template>
  <div id="app">
    <SpotyNavbar />
    <Container>
      <Row>
        <Column col="12">
          <SpotySearch />
        </Column>
        <Column md="6" sm="12" xs="12">
          Left
        </Column>
        <Column md="6" sm="12" xs="12">
          Rights
        </Column>
      </Row>
    </Container>                                    
  </div>
</template>

<script>
import SpotyNavbar from '@/components/SpotyNavbar';
import SpotySearch from '@/components/SpotySearch';
import SpotifyResults from '@/components/SpotifyResults';

export default {
  name: 'app',
  components: {
    SpotyNavbar,
    SpotySearch,
    SpotifyResults,
  },
};
</script>
