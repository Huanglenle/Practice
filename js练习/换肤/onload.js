// JavaScript Document
 function addLoadEvent(func)
 {
	 var oldonload=window.onload;//���¼���������ֵ�������oldonload
	 if(typeof window.onload!='function')//�ж��Ƿ��Ѿ��к�������window.onload���������
	 {
	 window.onload=func; //���������������ϻ�û�а��κκ�������ƽʱһ������º���
	 }
	 else
	 {                         //�����������������Ѿ������������������º���׷�ӵ�����ָ���ĩβ
		 window.onload=function() //������������������oldonload������func()
		    { 
			 oldonload();       //�����������֮�����ʽΪ��window.onload=oldonload;
			 func();           //window.onload=func;
			 }
	 }
 }