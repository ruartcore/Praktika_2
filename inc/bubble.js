let bubble  = {
  state: -1,
  max(obj){
    obj.h+=2;
    obj.w+=2;
    obj.x-=1;
    obj.y-=1;
  },
  min(obj){
    obj.h-=2;
    obj.w-=2;
    obj.x+=1;
    obj.y+=1;
  }
};
