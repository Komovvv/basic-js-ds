const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 */

function removeKFromList(l, k) {
    
  let head = l
  let previous = null

  while(l){
    if(l.value === k){            
      if(previous===null){
          head = l = l.next
          continue
      } else {
          previous.next = l.next
          l = l.next
          continue
      }
    }
    previous = l
    l = l.next
  }
  return head
}

module.exports = {
  removeKFromList
};
