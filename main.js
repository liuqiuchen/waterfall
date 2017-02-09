// 取数组的最小值
Array.prototype.minNum = function () {
    var minNum = this[0];
    for(var i = 0;i < this.length;i++) {
        if(this[i] < minNum) {
            minNum = this[i];
        }
    }
    return minNum;
};

window.onload = function () {

    var clientWidth = window.innerWidth;
    var boxes = document.getElementsByClassName('box');

    var boxW = boxes[0].offsetWidth;
    // 计算出每行排列几个
    // 10*2代表margin-left和margin-right都为10px
    var columnNum = Math.floor(clientWidth/(boxW + 10*2));

    // 存储每列图片高度的数组(带padding和边框的)
    var picHeight = [];
    // 排出第一行
    for(var i = 0;i < columnNum;i++) {
        boxes[i].style.left = (boxW + 10*2)*i + 'px';
        picHeight.push(boxes[i].offsetHeight);
    }

    // 剩下的图片根据高度最小的列排列
    for(var k = columnNum;k < boxes.length;k++) {
        var minHeight = picHeight.minNum();
        var minIndex = 0;
        for(var z = 0;z <= picHeight.length;z++) {
            if(picHeight[z] == minHeight) minIndex = z;
        }

        boxes[k].style.left = (boxW + 10*2)*minIndex + 'px';
        boxes[k].style.top = minHeight + 10 + 'px';

        // 更新高度
        picHeight[minIndex] = minHeight + 10 + boxes[k].offsetHeight;

    }

};















