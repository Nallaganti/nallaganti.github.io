import {onMounted, onUnmounted } from 'vue';
export function useClickOutside(el_target_ref, callback_fn){
    if(el_target_ref) callback_fn();;
    let listener =(el)=>{
        if(el.target == el_target_ref || el.composedPath().includes(el_target_ref.value)){
            return;
        }
        if( typeof callback_fn == 'function'){
            callback_fn();
        }
    }
    onMounted(()=>{
        window.addEventListener('click',listener)
    });
    onUnmounted(()=>{
        window.removeEventListener('click',listener)
    });
    return{
        listener
    }
}