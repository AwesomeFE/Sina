<template>
  <div class="Signup__formInput">
    <label
      class="Signup__title"
      v-if="title"
      :for="name"
    >
      {{title}}
    </label>
    <input
      class="Signup__input"
      :id="name"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      v-validate="validator(name)"
    />
    <span
      class="Signup__tips"
      v-show="errors.has(name)">
      {{$t(errorString)}}
    </span>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    title: String,
    type: String,
    name: String,
    value: String,
    placeholder: String,
    errorString: String,
    validator: Function
  },
  inject: ['$validator']
})
class input extends Vue {
  getValidateRules(name) {
    return this.validator && this.validator(name);
  }
}

export default input;
</script>

<style type="text/scss" lang="scss">
.Signup__formInput {
  margin-bottom: 12px;
  .Signup__title {
    display: block;
    padding: 0 12px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #828282;
  }
  .Signup__input {
    border: 0;
    border-top: 1px solid #c8c8c8;
    border-bottom: 1px solid #c8c8c8;
    outline: none;
    padding: 0 12px;
    height: 44px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .Signup__tips {

  }
}
</style>
