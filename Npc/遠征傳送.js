var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�˷R�����a#r#h ##k�ڬO�����ǰe�� �аݧA�n�ǰe�����?\r\n\#d#L0#�k�Ӷǰe��\r\n#L1#�֥d�C�ǰe��\r\n#L2#�V���ǰe��#L12#�����ǰe��\r\n#L7#�������]�ǰe��\r\n#L4#���s�ǰe��(2��4�W)\r\n#L4#�V�s�ǰe��(3�W)\r\n#L3#�Z�p���ǰe��\r\n#L5#�ƩԶǰe��\r\n#L6#���d�ǰe��\r\n#L11#�]���ڬ����ǰe��\r\n#L8#�����\r\n"); //\r\n#L9#�饻�Ѭ�\r\n#L10#���㴵
		} else if (status == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(271040000);
			} else if (selection == 1) {
				cm.dispose();
				cm.warp(270050000);
			} else if (selection == 2) {
				cm.dispose();
				cm.warp(211042401);
			} else if (selection == 3) {
				cm.dispose();
				cm.warp(211070000);
			} else if (selection == 4) {
				cm.dispose();
				cm.warp(240050400);
			} else if (selection == 5) {
				cm.dispose();
				cm.warp(262000000);
			} else if (selection == 6) {
				cm.dispose();
				cm.warp(272020110);
			} else if (selection == 7) {
				cm.dispose();
				cm.warp(689010000);
			} else if (selection == 8) {
				cm.dispose();
				cm.warp(551030100);
			} else if (selection == 9) {
				cm.dispose();
				cm.warp(800040410);
			} else if (selection == 10) {
				cm.dispose();
				cm.warp(230040420);
			} else if (selection == 11) {
				cm.dispose();
				cm.warp(105100100);
			} else if (selection == 12) {
				cm.dispose();
				cm.warp(211042301);
			}
		}
	}
}
