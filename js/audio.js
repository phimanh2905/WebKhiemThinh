var audiotypes={
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function ss_soundbits(sound){
	var audio_element = document.createElement('audio')
	if (audio_element.canPlayType){
		for (var i=0; i<arguments.length; i++){
			var source_element = document.createElement('source')
			source_element.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				source_element.setAttribute('type', audiotypes[RegExp.$1])
			audio_element.appendChild(source_element)
		}
		audio_element.load()
		audio_element.playclip=function(){
			audio_element.pause()
			audio_element.currentTime=0
			audio_element.play()
		}
		return audio_element
	}
}

/*var clicksound  = ss_soundbits('Music/1.ogg', "Music/PlayTrangChu.mp3");*/

// Chức năng
var PlayDangKy  = ss_soundbits("../Sounds/ChucNang/PlayDangKy.mp3");
var PlayCheDoBanDem  = ss_soundbits("../Sounds/ChucNang/PlayCheDoBanDem.mp3");
var PlayDangNhap = ss_soundbits("../Sounds/ChucNang/PlayDangNhap.mp3");
var PlayDatLaiCoChu  = ss_soundbits("../Sounds/ChucNang/PlayDatLaiCoChu.mp3");
var PlayEnglish  = ss_soundbits("../Sounds/ChucNang/PlayEnglish.mp3");
var PlayGiamKichCoChu = ss_soundbits("../Sounds/ChucNang/PlayGiamKichCoChu.mp3");
var PlayGiaoDienChuan  = ss_soundbits("../Sounds/ChucNang/PlayGiaoDienChuan.mp3");
var PlayHuongDanTruyCap  = ss_soundbits("../Sounds/ChucNang/PlayHuongDanTruyCap.mp3");
var PlayTangKichCoChu = ss_soundbits("../Sounds/ChucNang/PlayTangKichCoChu.mp3");
var PlayTiengViet  = ss_soundbits("../Sounds/ChucNang/PlayTiengViet.mp3");
var PlayTimKiem  = ss_soundbits("../Sounds/ChucNang/PlayTimKiem.mp3");
var PlayTuongPhanCao = ss_soundbits("../Sounds/ChucNang/PlayTuongPhanCao.mp3");
var PlayTimTheoTuKhoa = ss_soundbits("../Sounds/ChucNang/PlayTimTheoTuKhoa.mp3");

// Danh sách Menu
var PlayMenuChinh  = ss_soundbits("../Sounds/DanhSachMenu/PlayMenuChinh.mp3");
var PlayMenuTop  = ss_soundbits("../Sounds/DanhSachMenu/PlayMenuTop.mp3");
var PlayNoiDung = ss_soundbits("../Sounds/DanhSachMenu/PlayNoiDung.mp3");

// Menu Top

var PlayChinhSachPhapLuat = ss_soundbits("../Sounds/MenuTop/PlayChinhSachPhapLuat.mp3");
var PlayDienDan  = ss_soundbits("../Sounds/MenuTop/PlayDienDan.mp3");
var PlayGioiThieu  = ss_soundbits("../Sounds/MenuTop/PlayGioiThieu.mp3");
var PlayHoiQuanDoiRat = ss_soundbits("../Sounds/MenuTop/PlayHoiQuanDoiRat.mp3");
var PlayLinhVucHoatDong  = ss_soundbits("../Sounds/MenuTop/PlayLinhVucHoatDong.mp3");
var PlayTinTuc  = ss_soundbits("../Sounds/MenuTop/PlayTinTuc.mp3");
var PlayThuVien  = ss_soundbits("../Sounds/MenuTop/PlayThuVien.mp3");
var PlayTrangChu  = ss_soundbits("../Sounds/MenuTop/PlayTrangChu.mp3");

// Menu chính







// Danh sách nội dung
/*- Chính sách pháp luật*/
var PlayChinhSachPhapLuat = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayChinhSachPhapLuat.mp3");
var PlayNghiDinh85_2016  = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayNghiDinh85_2016.mp3");
var PlayPhapLenh4_2012  = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayPhapLenh4_2012.mp3");
var PlayPhapLenh26_2005 = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayPhapLenh26_2005.mp3");
var PlayThongTu27_2007  = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayThongTu27_2007.mp3");
var PlayThongTu31_2011  = ss_soundbits("../Sounds/ChinhSachPhapLuat/PlayThongTu31_2011.mp3");

/*- Diễn đàn*/
var PlayDienDan = ss_soundbits("../Sounds/DienDan/PlayDienDan.mp3");
var PlayDoAnXayDung  = ss_soundbits("../Sounds/DienDan/PlayDoAnXayDung.mp3");
var PlayNenCapBangLai  = ss_soundbits("../Sounds/DienDan/PlayNenCapBangLai.mp3");
var PlayNguoiKhuyetTatLai = ss_soundbits("../Sounds/DienDan/PlayNguoiKhuyetTatLai.mp3");
var PlayTinhYeuTanVo  = ss_soundbits("../Sounds/DienDan/PlayTinhYeuTanVo.mp3");
var PlayTongThongObama  = ss_soundbits("../Sounds/DienDan/PlayTongThongObama.mp3");

/*- Hội quán đời rất đẹp*/
var PlayChuyenDeBanHieu = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayChuyenDeBanHieu.mp3");
var PlayDaiDienDRDTham  = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayDaiDienDRDTham.mp3");
var PlayDRDThamGia  = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayDRDThamGia.mp3");
var PlayHoiQuanDoiRat = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayHoiQuanDoiRat.mp3");
var PlayPhatDongLienHoan  = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayPhatDongLienHoan.mp3");
var PlayThongBaoTraoTang  = ss_soundbits("../Sounds/HoiQuanDoiRatDep/PlayThongBaoTraoTang.mp3");

/*- Lĩnh vực hoạt động*/
var PlayCongTyNMSTuyen = ss_soundbits("../Sounds/LinhVucHoatDong/PlayCongTyNMSTuyen.mp3");
var PlayDRDChiaSeKinh  = ss_soundbits("../Sounds/LinhVucHoatDong/PlayDRDChiaSeKinh.mp3");
var PlayHopNhomHocBong  = ss_soundbits("../Sounds/LinhVucHoatDong/PlayHopNhomHocBong.mp3");
var PlayLinhVucHoatDong = ss_soundbits("../Sounds/LinhVucHoatDong/PlayLinhVucHoatDong.mp3");
var PlaySauKhiVeNha  = ss_soundbits("../Sounds/LinhVucHoatDong/PlaySauKhiVeNha.mp3");
var PlayTuyenDungViTri  = ss_soundbits("../Sounds/LinhVucHoatDong/PlayTuyenDungViTri.mp3");

/*- Tin Tức*/
var Play8TiengNamLanh = ss_soundbits("../Sounds/TinTuc/Play8TiengNamLanh.mp3");
var PlayBanTinHoatDong  = ss_soundbits("../Sounds/TinTuc/PlayBanTinHoatDong.mp3");
var PlayChuongTrinhTruyenHinh  = ss_soundbits("../Sounds/TinTuc/PlayChuongTrinhTruyenHinh.mp3");
var PlayDuLichBoRoi = ss_soundbits("../Sounds/TinTuc/PlayDuLichBoRoi.mp3");
var PlaySauKhiVeNha  = ss_soundbits("../Sounds/TinTuc/PlaySauKhiVeNha.mp3");
var PlayTinTuc  = ss_soundbits("../Sounds/TinTuc/PlayTinTuc.mp3");

/*- Thư viện*/
var Play5BuocDeCo = ss_soundbits("../Sounds/ThuVien/Play5BuocDeCo.mp3");
var PlayChuanBiGiCho  = ss_soundbits("../Sounds/ThuVien/PlayChuanBiGiCho.mp3");
var PlayDeDuocNhaTuyen  = ss_soundbits("../Sounds/ThuVien/PlayDeDuocNhaTuyen.mp3");
var PlayMeoTaoCVThu = ss_soundbits("../Sounds/ThuVien/PlayMeoTaoCVThu.mp3");
var PlayMeoTranhAmU  = ss_soundbits("../Sounds/ThuVien/PlayMeoTranhAmU.mp3");
var PlayThuVien  = ss_soundbits("../Sounds/ThuVien/PlayThuVien.mp3");
