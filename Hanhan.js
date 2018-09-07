class Hanhan{
	//供C#语言调用的一个接口函数
	function Execute(a){
		eval(a);
	}
	//向屏幕输出字符
	function puttext(a){
		print(a);
	}
	//读取文件内容并执行
	function efi(path){
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var ts = fso.OpenTextFile(path,1);
		Execute(ts.ReadAll());
		ts.close();
	}
	
	
	//数组求最大值
	
	function upper(a){
		var q = 0;
		var w = a(0);
		while(q < a.length){
			w = (w >=a[q]) ? w : a[q];
			q=q+1;
		}
		return w;
	}
	
	//数组求最小值
	
	function lower(a){
		var q = 0;
		var w = a(0);
		while(q < a.length){
			w = (w <=a[q]) ? w : a[q];
			q=q+1;
		}
		return w;
	}
	
	function ifel(a,s,d){
		if(a){
			Execute(s);
		}
		else{
			Execute(d);
		}
	}
	
	function wstr(a,s){
		var i = 0;
		for(i=0;i<a;i++){
			Execute(s);
		}
	}
	function wtj(a,s){
		while(a){
			Execute(s);
		}
	}
	
	
}



