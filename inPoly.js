//https://www.google.com.ua/search?client=ubuntu&channel=fs&q=%D0%B2%D1%85%D0%BE%D0%B4%D0%B8%D1%82+%D0%BB%D0%B8+%D1%82%D0%BE%D1%87%D0%BA%D0%B0+%D0%B2+%D1%84%D0%B8%D0%B3%D1%83%D1%80%D1%83&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=TUa1V_r9NJLDNKO_sgg
//http://delphimaster.net/view/2-1271922885/all

function inPolyline(x,y, tempPolyLine) {
var i1, i2;
result=false;
i2=0;
i1=tempPolyLine.length-1;
while (i1>=0){

}
// if not ((tempPolyLine[i1].x < x) xor (x <= tempPolyLine[i2].x))
// then if y - tempPolyLine[i1].y
// < (x - tempPolyLine[i1].x)
// * (tempPolyLine[i2].y - tempPolyLine[i1].y)
// / (tempPolyLine[i2].x - tempPolyLine[i1].x)
//     then Result:=not Result;
// i2:=i1;
// i1:=i1-1;
}

// i1, i2: integer;
// begin
// Result:=false;
// i2:=0;
// i1:=Length(TepmPolyLine)-1;
// while i1>=0 do begin;
// if not ((TepmPolyLine[i1].x < x) xor (x <= TepmPolyLine[i2].x))
// then if y - TepmPolyLine[i1].y
// < (x - TepmPolyLine[i1].x)
// * (TepmPolyLine[i2].y - TepmPolyLine[i1].y)
// / (TepmPolyLine[i2].x - TepmPolyLine[i1].x)
//     then Result:=not Result;
// i2:=i1;
// i1:=i1-1;
// end;
// end;