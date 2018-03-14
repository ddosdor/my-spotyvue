<template>
  <div class="SpotySearch">
    <Row>
      <Column md="10" sm="12" xs="12">
        <MdInput label="Enter artist name" />
      </Column>
      <Column md="2" sm="12" xs="12" class="SpotySearch__btn-search-container">
        <Btn block outline="primary">
         <fa icon="magic" class="mr-1"/>
          Search
        </Btn>
      </Column>
    </Row>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>