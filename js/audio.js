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

/*- Giới thiệu*/
var PlayAnPhamDaPhat = ss_soundbits("../Sounds/MenuChinh/GioiThieu/PlayAnPhamDaPhat.mp3");
var PlayBaoCaoHoatDong  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/PlayBaoCaoHoatDong.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/PlayLienHe.mp3");

/*-- Giới thiệu\ mục con*/
var PlayGiaTri = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayGiaTri.mp3");
var PlayGioiThieu  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayGioiThieu.mp3");
var PlayLichSuHinhThanh  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayLichSuHinhThanh.mp3");
var PlayMucTieu  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayMucTieu.mp3");
var PlaySoDoToChuc = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlaySoDoToChuc.mp3");
var PlayTamNhin  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayTamNhin.mp3");
var PlayThanhTuu  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/GioiThieu/PlayThanhTuu.mp3");

/*-- Nhân viên*/
var PlayCuuNhanVien = ss_soundbits("../Sounds/MenuChinh/GioiThieu/NhanVien/PlayCuuNhanVien.mp3");
var PlayNhanVien  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/NhanVien/PlayNhanVien.mp3");
var PlayNhanVienDRD  = ss_soundbits("../Sounds/MenuChinh/GioiThieu/NhanVien/PlayNhanVienDRD.mp3");

/*- Chính sách và pháp luật*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/PlayGioiThieu.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/PlayLienHe.mp3");

/*-- Danh mục văn bản luật*/
var PlayBaoTroXaHoi = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayBaoTroXaHoi.mp3");
var PlayCacLinhVucKhac  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayCacLinhVucKhac.mp3");
var PlayDanSuHonNhan  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayDanSuHonNhan.mp3");
var PlayDanhMucVanBanLuat  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayDanhMucVanBanLuat.mp3");
var PlayDatDaiNhaO  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayDatDaiNhaO.mp3");
var PlayGiaoDucDayNghe = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayGiaoDucDayNghe.mp3");
var PlayGiaoThongXayDung  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayGiaoThongXayDung.mp3");
var PlayKinhDoanh  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayKinhDoanh.mp3");
var PlayLaoDong = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayLaoDong.mp3");
var PlayThuTucHanhChinh  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayThuTucHanhChinh.mp3");
var PlayXuLyViPham  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayXuLyViPham.mp3");
var PlayYTe  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/DanhMucVanBanLuat/PlayYTe.mp3");

/*-- Góc tư vấn */
var PlayCauHoiDaGiai = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/GocTuVan/PlayCauHoiDaGiai.mp3");
var PlayGocTuVan  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/GocTuVan/PlayGocTuVan.mp3");
var PlayGuiCauHoi  = ss_soundbits("../Sounds/MenuChinh/ChinhSachVaPhapLuat/GocTuVan/PlayGuiCauHoi.mp3");


// - Diễn đàn
var PlayDienDan = ss_soundbits("../Sounds/MenuChinh/DienDan/PlayDienDan.mp3");
var PlayGioiThieuDienDan  = ss_soundbits("../Sounds/MenuChinh/DienDan/PlayGioiThieuDienDan.mp3");
var PlayNoiQuyDienDan  = ss_soundbits("../Sounds/MenuChinh/DienDan/PlayNoiQuyDienDan.mp3");
var PlayTaoChuDeMoi  = ss_soundbits("../Sounds/MenuChinh/DienDan/PlayTaoChuDeMoi.mp3");

/*-- Các chủ đề thảo luận*/
var PlayCacChuDeThaoLuan = ss_soundbits("../Sounds/MenuChinh/DienDan/CacChuDeThaoLuan/PlayCacChuDeThaoLuan.mp3");
var PlayChuDeKhac  = ss_soundbits("../Sounds/MenuChinh/DienDan/CacChuDeThaoLuan/PlayChuDeKhac.mp3");
var PlayLuatNguoiKhuyetTat  = ss_soundbits("../Sounds/MenuChinh/DienDan/CacChuDeThaoLuan/PlayLuatNguoiKhuyetTat.mp3");
var PlaySangTacCuaNguoi  = ss_soundbits("../Sounds/MenuChinh/DienDan/CacChuDeThaoLuan/PlaySangTacCuaNguoi.mp3");

// - Hội quán đời rất đẹp
var PlayCungCapCacDichVu = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/PlayCungCapCacDichVu.mp3");
var PlayDanhSachUngHo  = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/PlayDanhSachUngHo.mp3");
var PlayGioiThieu  = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/PlayGioiThieu.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/PlayLienHe.mp3");

/*-- Tin hoạt động*/
var PlaySanChoiKetNoi = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/TinHoatDong/PlaySanChoiKetNoi.mp3");
var PlayVanNghe  = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/TinHoatDong/PlayVanNghe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/HoiQuanDoiRatDep/TinHoatDong/PlayTinHoatDong.mp3");

// - Lĩnh vực hoạt động
var PlayLichHoatDong = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/PlayLichHoatDong.mp3");
var PlayNangCaoNhanThuc  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/PlayNangCaoNhanThuc.mp3");
var PlayVanDongBienHo  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/PlayVanDongBienHo.mp3");

/*-- Học bổng người bạn đồng hành*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HocBongNguoiBanDongHanh/PlayGioiThieu.mp3");
var PlayHocBongNguoiBan  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HocBongNguoiBanDongHanh/PlayHocBongNguoiBan.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HocBongNguoiBanDongHanh/PlayTinHoatDong.mp3");

/*-- Hỗ trợ di chuyển*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HoTroDiChuyen/PlayGioiThieu.mp3");
var PlayHoTroDiChuyen  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HoTroDiChuyen/PlayHoTroDiChuyen.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HoTroDiChuyen/PlayLienHe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/HoTroDiChuyen/PlayTinHoatDong.mp3");

/*-- Mạng lưới người khuyết tật*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/MangLuoiNguoiKhuyetTat/PlayGioiThieu.mp3");
var PlayMangLuoiNguoiKhuyetTat  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/MangLuoiNguoiKhuyetTat/PlayMangLuoiNguoiKhuyetTat.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/MangLuoiNguoiKhuyetTat/PlayTinHoatDong.mp3");

/*-- Nâng cao năng lực*/
var PlayDanhSachUngHo = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayDanhSachUngHo.mp3");
var PlayGioiThieu  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayGioiThieu.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayLienHe.mp3");
var PlayNangCaoNangLuc  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayNangCaoNangLuc.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayTinHoatDong.mp3");
var PlayThanhNienKhuyetTat  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/NangCaoNangLuc/PlayThanhNienKhuyetTat.mp3");

/*-- Sống độc lập*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/SongDocLap/PlayGioiThieu.mp3");
var PlaySongDocLap  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/SongDocLap/PlaySongDocLap.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/SongDocLap/PlayLienHe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/SongDocLap/PlayTinHoatDong.mp3");

/*-- Tiếp cận giáo dục*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanGiaoDuc/PlayGioiThieu.mp3");
var PlayTiepCanGiaoDuc  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanGiaoDuc/PlayTiepCanGiaoDuc.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanGiaoDuc/PlayLienHe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanGiaoDuc/PlayTinHoatDong.mp3");

/*-- Tiếp cận vì sự hòa nhập*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanViSuHoaNhap/PlayGioiThieu.mp3");
var PlayTiepCapViHoaNhap  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanViSuHoaNhap/PlayTiepCapViHoaNhap.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanViSuHoaNhap/PlayLienHe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/TiepCanViSuHoaNhap/PlayTinHoatDong.mp3");

/*-- Việc làm*/
var PlayGioiThieu = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/ViecLam/PlayGioiThieu.mp3");
var PlayViecLam  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/ViecLam/PlayViecLam.mp3");
var PlayLienHe  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/ViecLam/PlayLienHe.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/LinhVucHoatDong/ViecLam/PlayTinHoatDong.mp3");

// - Tin Tức
var PlayGuongDienHinh = ss_soundbits("../Sounds/MenuChinh/TinTuc/PlayGuongDienHinh.mp3");
var PlayTinBonPhuong  = ss_soundbits("../Sounds/MenuChinh/TinTuc/PlayTinBonPhuong.mp3");
var PlayTinHoatDong  = ss_soundbits("../Sounds/MenuChinh/TinTuc/PlayTinHoatDong.mp3");
var PlayTinHocBong  = ss_soundbits("../Sounds/MenuChinh/TinTuc/PlayTinHocBong.mp3");
var PlayTinTuyenDung  = ss_soundbits("../Sounds/MenuChinh/TinTuc/PlayTinTuyenDung.mp3");

// - Thư viện
var PlayHinhAnh  = ss_soundbits("../Sounds/MenuChinh/ThuVien/PlayHinhAnh.mp3");

/*-- Diễn đàn*/
var PlayDienDan  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/PlayDienDan.mp3");
var PlayGioiThieuDienDan  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/PlayGioiThieuDienDan.mp3");
var PlayNoiQuyDienDan  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/PlayNoiQuyDienDan.mp3");
var PlayTaoChuDeMoi  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/PlayTaoChuDeMoi.mp3");

/*--- Các chủ đề thảo luận*/
var PlayCacChuDeThaoLuan  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/CacChuDeThaoLuan/PlayCacChuDeThaoLuan.mp3");
var PlayChuDeKhac  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/CacChuDeThaoLuan/PlayChuDeKhac.mp3");
var PlayLuatNguoiKhuyetTat  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/CacChuDeThaoLuan/PlayLuatNguoiKhuyetTat.mp3");
var PlaySangTacCuaNguoi  = ss_soundbits("../Sounds/MenuChinh/ThuVien/DienDan/CacChuDeThaoLuan/PlaySangTacCuaNguoi.mp3");

/*-- Tài liệu*/
var PlayAnPhamDaPhat  = ss_soundbits("../Sounds/MenuChinh/ThuVien/TaiLieu/PlayAnPhamDaPhat.mp3");
var PlayBaoCaoHoatDong  = ss_soundbits("../Sounds/MenuChinh/ThuVien/TaiLieu/PlayBaoCaoHoatDong.mp3");
var PlayKyNangTimViec  = ss_soundbits("../Sounds/MenuChinh/ThuVien/TaiLieu/PlayKyNangTimViec.mp3");
var PlaySach  = ss_soundbits("../Sounds/MenuChinh/ThuVien/TaiLieu/PlaySach.mp3");
var PlayTaiLieu  = ss_soundbits("../Sounds/MenuChinh/ThuVien/TaiLieu/PlayTaiLieu.mp3");

/*-- Video*/
var PlayCauChuyenThanhNien  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayCauChuyenThanhNien.mp3");
var PlayGuongDienHinh  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayGuongDienHinh.mp3");
var PlayGioiThieuDRD  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayGioiThieuDRD.mp3");
var PlayHoatDongDRD  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayHoatDongDRD.mp3");
var PlayHoatDongVanNghe  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayHoatDongVanNghe.mp3");
var PlayKhac  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayKhac.mp3");
var PlayVideo  = ss_soundbits("../Sounds/MenuChinh/ThuVien/Video/PlayVideo.mp3");

// Danh sách nội dung
/*- Chính sách pháp luật*/
var PlayChinhSachPhapLuat = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayChinhSachPhapLuat.mp3");
var PlayNghiDinh85_2016  = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayNghiDinh85_2016.mp3");
var PlayPhapLenh4_2012  = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayPhapLenh4_2012.mp3");
var PlayPhapLenh26_2005 = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayPhapLenh26_2005.mp3");
var PlayThongTu27_2007  = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayThongTu27_2007.mp3");
var PlayThongTu34_2011  = ss_soundbits("../Sounds/DanhSachNoiDung/ChinhSachPhapLuat/PlayThongTu34_2011.mp3");

/*- Diễn đàn*/
var PlayDienDan = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayDienDan.mp3");
var PlayDoHoaXayDung  = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayDoHoaXayDung.mp3");
var PlayNenCapBangLai  = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayNenCapBangLai.mp3");
var PlayNguoiKhuyetTatLai = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayNguoiKhuyetTatLai.mp3");
var PlayTinhYeuTanVo  = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayTinhYeuTanVo.mp3");
var PlayTongThongObama  = ss_soundbits("../Sounds/DanhSachNoiDung/DienDan/PlayTongThongObama.mp3");

/*- Hội quán đời rất đẹp*/
var PlayChuyenDeBanHieu = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayChuyenDeBanHieu.mp3");
var PlayDaiDienDRDTham  = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayDaiDienDRDTham.mp3");
var PlayDRDThamGia  = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayDRDThamGia.mp3");
var PlayHoiQuanDoiRat = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayHoiQuanDoiRat.mp3");
var PlayPhatDongLienHoan  = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayPhatDongLienHoan.mp3");
var PlayThongBaoTraoTang  = ss_soundbits("../Sounds/DanhSachNoiDung/HoiQuanDoiRatDep/PlayThongBaoTraoTang.mp3");

/*- Lĩnh vực hoạt động*/
var PlayCongTyNMSTuyen = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlayCongTyNMSTuyen.mp3");
var PlayDRDChiaSeKinh  = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlayDRDChiaSeKinh.mp3");
var PlayHopNhomHocBong  = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlayHopNhomHocBong.mp3");
var PlayLinhVucHoatDong = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlayLinhVucHoatDong.mp3");
var PlaySauKhiVeNha  = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlaySauKhiVeNha.mp3");
var PlayTuyenDungViTri  = ss_soundbits("../Sounds/DanhSachNoiDung/LinhVucHoatDong/PlayTuyenDungViTri.mp3");

/*- Tin Tức*/
var Play8TiengNamLanh = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/Play8TiengNamLanh.mp3");
var PlayBanTinHoatDong  = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/PlayBanTinHoatDong.mp3");
var PlayChuongTrinhTruyenHinh  = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/PlayChuongTrinhTruyenHinh.mp3");
var PlayDuLichBoRoi = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/PlayDuLichBoRoi.mp3");
var PlaySauKhiVeNha  = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/PlaySauKhiVeNha.mp3");
var PlayTinTuc  = ss_soundbits("../Sounds/DanhSachNoiDung/TinTuc/PlayTinTuc.mp3");

/*- Thư viện*/
var Play5BuocDeCo = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/Play5BuocDeCo.mp3");
var PlayChuanBiGiCho  = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/PlayChuanBiGiCho.mp3");
var PlayDeDuocNhaTuyen  = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/PlayDeDuocNhaTuyen.mp3");
var PlayMeoTaoCVThu = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/PlayMeoTaoCVThu.mp3");
var PlayMeoTranhAmU  = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/PlayMeoTranhAmU.mp3");
var PlayThuVien  = ss_soundbits("../Sounds/DanhSachNoiDung/ThuVien/PlayThuVien.mp3");
