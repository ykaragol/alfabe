import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  keys:[],
  pressedKeys:[],

  buttons:Ember.computed('keys', 'pressedKeys.[]', function(){
    var pressedKeys = this.get('pressedKeys');
    return this.get('keys').map((item)=>{
      var pressed = pressedKeys.contains(item);
      return {value:item, pressed:pressed};
    });
  }),

  actions:{
    clickHandler:function(key){
      this.sendAction('keyPressed', key);
    }
  }
});
