window.onload=function(){
	
	var table=document.getElementById('tableShop');//购物车表格
	var selectInput=document.getElementsByClassName("check");//所有单选框
	var checkAllInput=document.getElementsByClassName("check_all");//所有全选框
	var tr=table.children[1].rows;//获取表格第n行
	var selectToTal=document.getElementById("selectedTotal");//已选商品数目容器
	var priceToTal=document.getElementById("priceTotal");//合计的价格
	var deleteAll=document.getElementById("deleteAll");//删除全部
	var foot=document.getElementById("foot");//获取子列表
	var selected=document.getElementById("selected");
	var selectedViewList=document.getElementById("selectViewList");
	console.log(foot);
function getTotal() {
		var seleted = 0;
		var price = 0;//
		var HTMLstr = "";
		for (var i = 0;i<tr.length; i++) {
			if (tr[i].getElementsByTagName('input')[0].checked) 
			{
				tr[i].className = 'on';
				seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
				price += parseFloat(tr[i].cells[4].innerHTML);
				HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">取消选择</span></div>'
			}
			else {
				tr[i].className = '';
			}
		}	
		selectToTal.innerHTML = seleted;
		priceToTal.innerHTML = price.toFixed(2);
		selectedViewList.innerHTML = HTMLstr;
	
		if (seleted == 0) {
			foot.className = 'foot';
		}
	}
	//计算单行价格
	function getSubToTal(){
		for(var i=0;i<tr.length;i++){
		var cells=tr[i];
		// var price=cells[2];//单价
		var price=cells.children[2].innerHTML;
		console.log(price);
		var xj=cells.children[4];//小计
		console.log(xj)
		var count=tr[i].getElementsByTagName("input")[1];//数目
		console.log(count);
		var span=tr[i].getElementsByTagName("span")[1];//-号
		xj.innerHTML=(parseInt(count.value))*(parseFloat(price)).toFixed(2);//
		if(count.value==0){
			span.innerHTML=""
		}
		else{
			span.innerHTML="-"
		}
	}
}
//点击选择框
for(var i=0;i<selectInput.length;i++){
	// console.log(selectInput[i]);
	// selectInput[i].onclick=function
	selectInput[i].onclick=function(){
		if(this.className.indexOf("check_all")>=0){
			for(var j=0;j<selectInput.length;j++){
				console.log(selectInput);
				// selectInput[j].checked=selectInput[i].checked;
				 selectInput[j].checked = this.checked;
			}
		}
		else{
			 for (var k = 0; k < checkAllInput.length; k++) {
                    checkAllInput[k].checked = false;
                }
		}
		getTotal();
	}
}
 
//为每行元素添加事件
for (var i=0;i<tr.length;i++)
{
	tr[i].onclick=function(e){
		var e=e||window.event;//兼容浏览器
		var el=e.target||e.srcElement;//通过target属性获取触发元素；
		var cls=el.className;//获取元素类名
		var countInout=this.getElementsByTagName("input")[1];
		var value=parseInt(countInout.value);//获取输入框的值
		switch(cls){
			case "add":
				countInout.value=value + 1;
				getSubToTal(this);break;
			case "reduce":
			if(value>1){
				countInout.value=value-1;
				getSubToTal(this);
			}break;
			case "delete":
			var con=confirm("确定删除此商品嘛");
			if(con){
				 this.parentNode.removeChild(this);
			}
			break;
		}
		getTotal();
	}
	//显示商品弹层
	selected.onclick = function () {
		console.log("测试");
        if (selectedTotal.innerHTML != 0) {
            foot.className = (foot.className == 'foot' ? 'foot show' : 'foot');
        }
    }
	// 取消选择的按钮
	  selectedViewList.onclick = function (e) {
        var e = e || window.event;
        var el = e.srcElement;
        if (el.className=='del') {
            var input =  tr[el.getAttribute('index')].getElementsByTagName('input')[0]
            input.checked = false;
            input.onclick();
        }
    }
	tr[i].getElementsByTagName("input")[1].onkeyup=function(){
		var val=parseInt(this.value);
		if(isNaN(val)||val<=0){
			val=1;
		}
		if(this.value!=val){
			this.value=val;
			getSubToTal(this.parentNode.parentNode); //更新小计
	        getTotal(); //更新总数
		}
	}
	//删除全部
	deleteAll.onclick=function(){
		console.log("123");
		if(selectToTal.innerHTML!=0){
			var con=confirm("确定删除所选商品嘛");
			if(con){
				for(var i=0;i<tr.length;i++){
					if(tr[i].getElementsByTagName("input")[0].checked){
						tr[i].parentNode.removeChild(tr[i]);//删除子节点
						i--;//回退下标位置
					}
				}
			}
		}
		else
			{
				alert("请选择商品");
			}
		
		getTotal();
	}
// 	 checkAllInput[0].checked = true;
// 	checkAllInput[0].onclick();
}
}
 
