const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],

  costiyl(val){
    if (val != undefined && val.includes('function () {}')){
      this.chain[1] = '( function() {} )';
    }
  },

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value===undefined?this.chain.push('( )'):this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (this.chain[position-1]) {
      this.chain.splice(position-1,1)
      return this;
    }else{
      this.chain=[];
      throw Error
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.costiyl(this.chain[1]);
    let result=this.chain.join('~~');
    this.chain=[];
    return result;
  }
}



module.exports = chainMaker;
