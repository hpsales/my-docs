/*
body��DOM�������body�ӽڵ㣬�� <body> ��ǩ��
documentElement �������ڵ����ĸ��ڵ�root����<html> ��ǩ��

ûʹ��DTD���������ģʽBackCompat�£�
���ƴ��� ��������:

document.documentElement.clientHeight=0document.body.clientHeight=618

ʹ��DTD�������׼ģʽCSS1Compat�£�
���ƴ��� ��������:

document.documentElement.clientHeight=618 document.body.clientHeight=28(��ʾ���ݵĸ߶�)

�����ȡ������ĳߴ���Ҫע���ˡ����Բο����´��룺
*/

if (document.compatMode == "BackCompat") {
cWidth = document.body.clientWidth;
cHeight = document.body.clientHeight;
sWidth = document.body.scrollWidth;
sHeight = document.body.scrollHeight;
sLeft = document.body.scrollLeft;
sTop = document.body.scrollTop;
}
else { //document.compatMode == "CSS1Compat"
cWidth = document.documentElement.clientWidth;
cHeight = document.documentElement.clientHeight;
sWidth = document.documentElement.scrollWidth;
sHeight = document.documentElement.scrollHeight;
sLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;
sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
} 