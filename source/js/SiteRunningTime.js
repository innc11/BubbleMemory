// from https://github.com/zhusaidong/SiteRunningTime

function SiteRunningTime()
{
	var idSelector = "#SiteRunningTime"

	var node = document.querySelector(idSelector)
	// node.className = "SiteRunningTime";
	
	if(node == null)
		return

	var startTime = node.getAttribute("start-time")
	var autoRefresh = node.getAttribute("auto-refresh")
	var format = node.getAttribute("format")

	if(format==null){
		node.innerText += "站点时间格式未设置"
		return
	}

	if(startTime==null){
		node.innerText += "站点开始时间未设置"
		return
	}

	var createDiv = function(className)
	{
		return '<div class="'+className+'" style="display: inline"></div>'
	}

	//陪伴的时光：%y年%m月%d日%h时%i分%s秒

	var content = format
	content = content.replace(/%y/g, createDiv("year"))
	content = content.replace(/%m/g, createDiv("month"))
	content = content.replace(/%d/g, createDiv("day"))
	content = content.replace(/%h/g, createDiv("hour"))
	content = content.replace(/%i/g, createDiv("minute"))
	content = content.replace(/%s/g, createDiv("second"))
	content = content.replace(/%Y/g, createDiv("_year"))
	content = content.replace(/%M/g, createDiv("_month"))
	content = content.replace(/%D/g, createDiv("_day"))
	content = content.replace(/%H/g, createDiv("_hour"))
	content = content.replace(/%I/g, createDiv("_minute"))
	content = content.replace(/%S/g, createDiv("_second"))

	node.innerHTML = content

	//document.getElementById("footer").appendChild(node);
	
	var refreshTime = function(startTime)
	{
		var _selector = function(selector)
		{
			return document.querySelector(selector);
		}
		
		//fix bug#2 在ios中使用时间戳加减使用 Data.parse()转换
		var s1 = Date.parse(startTime.replace(/-/g, "/")),
		s2 = new Date(),
		runTime = parseInt((s2.getTime() - s1) / 1000);

		var year = month = day = hour = minute = second = Year = Month = Day = Hour = Minute = Second = 0;

		Year =   Math.floor(runTime / 86400 / 365);
		Month =  Math.floor(runTime / 86400 / 30);
		Day =    Math.floor(runTime / 86400);
		Hour =   Math.floor(runTime / 3600);
		Minute = Math.floor(runTime / 60);
		Second = Math.floor(runTime);

		
		year = Math.floor(runTime / 86400 / 365);
		runTime = runTime % (86400 * 365);
		month = Math.floor(runTime / 86400 / 30);
		runTime = runTime % (86400 * 30);
		day = Math.floor(runTime / 86400);
		runTime = runTime % 86400;
		hour = Math.floor(runTime / 3600);
		runTime = runTime % 3600;
		minute = Math.floor(runTime / 60);
		runTime = runTime % 60;
		second = runTime;

		var _year = _month = _day = _hour = _minute = _second = __year = __month = __day = __hour = __minute = __second = null;
		if((_year =   _selector(idSelector + " > .year"))   != null) _year.innerText = year;
		if((_month =  _selector(idSelector + " > .month"))  != null) _month.innerText = month;
		if((_day =    _selector(idSelector + " > .day"))    != null) _day.innerText = day;
		if((_hour =   _selector(idSelector + " > .hour"))   != null) _hour.innerText = hour;
		if((_minute = _selector(idSelector + " > .minute")) != null) _minute.innerText = minute;
		if((_second = _selector(idSelector + " > .second")) != null) _second.innerText = second;

		if((__year =   _selector(idSelector + " > ._year"))   != null) __year.innerText = Year;
		if((__month =  _selector(idSelector + " > ._month"))  != null) __month.innerText = Month;
		if((__day =    _selector(idSelector + " > ._day"))    != null) __day.innerText = Day;
		if((__hour =   _selector(idSelector + " > ._hour"))   != null) __hour.innerText = Hour;
		if((__minute = _selector(idSelector + " > ._minute")) != null) __minute.innerText = Minute;
		if((__second = _selector(idSelector + " > ._second")) != null) __second.innerText = Second;
	}

	if(autoRefresh != null)
	{
		setInterval(function(){
			refreshTime.call(null, startTime);
		}, 1000);
	}

	refreshTime(startTime);
};
