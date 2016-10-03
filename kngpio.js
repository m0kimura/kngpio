var Kg=require('knuty');
var Fs=require('fs');
Kg.extend({
  dir: "/sys/class/gpio/",
  pinMode: function(pin, mode){
    Fs.writeFileSync(this.dir+"export", pin);
    if(mode=="OUTPUT"){mode="out";}else if(mode=="out"){mode="out";}
    else{mode="in";}
    Fs.writeFileSync(this.dir+"gpio"+pin+'/direction', mode);
  },
//
//
  digitalWrite: function(pin, val){
    if(val=="HIGH"){val=1;}else if(val=="ON"){val=1;}else if(val=="1"){val=1;}
    else{val=0;}
    Fs.writeFileSync(this.dir+"gpio"+pin+'/value', val);
  },
//
//
  digitalRead: function(pin){
    return Fs.readFileSync(this.dir+'gpio'+pin+'/value', 'utf-8');
  },
//
//
  pinClose: function(pin){
    Fs.writeFileSync(this.dir+"unexport", pin);
  }
});
module.exports=Kg;
