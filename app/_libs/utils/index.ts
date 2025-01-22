function unixToDatetime(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function dateToUnixTimestamp(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return Math.floor(date.getTime() / 1000);
}

function formatTime(time: string) {
  const date = new Date(time);
  const formattedDate =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");

    return formattedDate;
}

function generateSlug(title: string) {
  const from =
    "áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ";
  const to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
  const regex = new RegExp(from.split("").join("|"), "g");
  title = title.replace(/[^\w\s]/gi, "");

  title = title.toLowerCase().replace(regex, (c) => to.charAt(from.indexOf(c)));
  return title.replace(/ /g, "-");
}

function switch_display_value(value: string) {
  let displayValue = value;
  switch (value) {
    case "less_than_or_equal_to":
      displayValue = "Nhỏ hơn hoặc bằng";
      break;
    case "greater_than_or_equal_to":
      displayValue = "Lớn hơn hoặc bằng";
      break;
    case "equal_to":
      displayValue = "Bằng";
      break;
    case "less_than":
      displayValue = "Nhỏ hơn";
      break;
    case "greater_than":
      displayValue = "Lớn hơn";
      break;
    case "not_equal_to":
      displayValue = "Khác";
      break;
    case "authenticated":
      displayValue = "Đã xác thực";
      break;
    case "unauthenticated":
      displayValue = "Chưa xác thực";
      break;
    default:
      break;
  }
  return displayValue;
}

function switch_display_label(value: string) {
  let displayValue = value;
  switch (value) {
    case "watch_video":
      displayValue = "Xem video";
      break;
    case "upgrade_pro":
      displayValue = "Đã nâng cấp lên Pro";
      break;
    case "account":
      displayValue = "Tài khoản";
      break;
    case "total_time":
      displayValue = "Tổng thời gian";
      break;
    case "cold_email":
      displayValue = "Mail lạnh";
      break;
    default:
      break;
  }
  return displayValue;
}

function switch_display_subLabel(value: string) {
  let displayValue = value;
  switch (value) {
    case "total_learned_video":
      displayValue = "số video đã xem";
      break;
    case "last_seen":
      displayValue = "lần cuối (ngày)";
      break;
    case "last_seen_hour":
      displayValue = "lần cuối (giờ)";
      break;
    case "total_canceled":
      displayValue = "số lần huỷ";
      break;
    case "total_complete":
      displayValue = "Số lần hoàn thành";
      break;
    case "created_at":
      displayValue = "ngày đăng ký";
      break;
    case "created_at_hour":
      displayValue = "giờ đăng ký";
      break;
    case "is_verify_email":
      displayValue = "xác thực email";
      break;

    default:
      break;
  }
  return displayValue;
}

function formatNumber(number: number) {
  return new Intl.NumberFormat().format(number);
}

export {
  unixToDatetime,
  dateToUnixTimestamp,
  generateSlug,
  switch_display_value,
  switch_display_label,
  switch_display_subLabel,
  formatTime,
  formatNumber
};
