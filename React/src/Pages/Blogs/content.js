// Content.js



import React, { useEffect, useRef } from 'react';
import { Typography, List, ListItem, Box, Divider } from '@mui/material';

const Content = ({ setActiveSection }) => {
  const sectionsRef = useRef([]);

  const handleScroll = () => {
    const sectionPositions = sectionsRef.current.map(section => section.getBoundingClientRect().top);
    const index = sectionPositions.findIndex(position => position > 0) - 1;
    const currentSection = index >= 0 ? index : 0;
    setActiveSection(sectionsRef.current[currentSection].dataset.section);
  };

  useEffect(() => {
    const container = document.getElementById("content-container");
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="content-container" sx={{ flexGrow: 1, backgroundColor: '#0F172A', padding: '20px', height: '100vh', overflowY: 'auto', color: 'white' }}>
      <Box data-section="Giới thiệu" ref={el => sectionsRef.current[0] = el}>
        <Typography variant="h3" fontWeight="bold">Giới thiệu</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" fontWeight="bold" component="span">“</Typography>
          <Typography variant="h5" fontStyle="italic" component="span">
            Xin chào, tôi là một kỹ sư phần mềm, một blogger với khao khát khởi nghiệp.
          </Typography>
          <Typography variant="h4" fontWeight="bold" component="span">”</Typography>
        </Box >
        <Typography mt={2} color="#94a2b8">
          Tôi đã viết ứng dụng đầu tiên của tôi vào năm 20 tuổi. App này nhanh chóng giúp tôi kiếm được 1000$ chỉ trong 3 ngày. 
          Kể từ đó, tôi đã trở thành một lập trình viên website với hơn 4 năm kinh nghiệm, làm việc như một dev front-end cho 3 công ty, 
          cùng với đó là một vài dự án cá nhân.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Nhờ đó, tôi có kinh nghiệm làm việc về front-end và back-end.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Tôi hiện đang là một mentor sở hữu 2 khóa học online về website với hơn 800 học viên.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Kinh nghiệm làm việc" ref={el => sectionsRef.current[1] = el}>
        <Typography variant="h3" fontWeight="bold">Kinh nghiệm làm việc</Typography>
        <Typography variant="h5" mt={5} fontWeight="bold">IT mentor</Typography>
        <Typography mt={2} color="#94a2b8">
          Sau khi làm việc toàn thời gian hơn 2 năm với vị trí là lập trình viên front-end, 
          tôi muốn thử sức ở lĩnh vực giáo dục. Tôi đã nghỉ việc tại công ty và bắt đầu dành toàn thời gian để xây dựng các khóa học online chất lượng. 
          Các khóa học bao gồm Master Javascript và ReactJs Super. 
          Các khóa học của tôi đã giúp hơn 800 học viên nắm vững được các kiến thức lập trình thực tế và con số này không ngừng tăng lên mỗi ngày.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Song song với việc đó tôi cũng cố gắng tạo dựng thương hiệu cá nhân nổi bật trên cộng đồng lập trình.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Tôi đã sử dụng React, Javascript, Node.js, MongoDB, Github để phát triển các khóa học.
        </Typography>

        <Typography variant="h5" mt={5} fontWeight="bold">Kỹ sư Front-end</Typography>
        <Typography mt={2}>TKMS Technology,</Typography>
        <Typography mt={2} color="#94a2b8">
          KMS Technology là công ty công nghệ phần mềm tại Việt Nam với số lượng nhân viên hơn 1000 người tại Mỹ và Việt Nam. Công ty đạt giải Top những nơi làm việc tốt nhất Việt Nam. Các sản phẩm nổi bật của công ty như QASymphony, Kobiton, Katalon,...
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Tôi đảm nhận vị trí là một senior front-end developer cho dự án GoFan - một nền tảng tổ chức sự kiện cho các trường học ở Mỹ. 
          Công việc hằng ngày của tôi là báo cáo tiến độ, phân tích chức năng, code UI, logic và viết test.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Chúng tôi sử dụng React, Typescript, Java, Bitbucket, Jira và AWS để phát triển sản phẩm.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Vì muốn theo đuổi ước mơ tự kinh doanh và làm việc tự do, tôi đã xin rời công ty.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Kỹ năng" ref={el => sectionsRef.current[2] = el}>
        <Typography variant="h3" fontWeight="bold">Kỹ năng</Typography>
        <Typography variant="h5" mt={5} fontWeight="bold" color="#94a2b8">Ngôn ngữ lập trình</Typography>
        <Typography mt={2} color="#94a2b8">React.js, Node.js, JavaScript, HTML & CSS</Typography>

        <Typography variant="h5" mt={5} fontWeight="bold" color="#94a2b8">Công nghệ Web Front-end</Typography>
        <Typography mt={2} color="#94a2b8">React, Angular, Vue, Next.js, Nuxt.js, Gatsby, Styled Components, Sass, Webpack, HTML5, CSS3.</Typography>

        <Typography variant="h5" mt={5} fontWeight="bold">Công nghệ Web Back-end</Typography>
        <List >
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8"}}>– Giao thức: REST, HTTP(S)</ListItem>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8" }}>– Frameworks/Libraries: Node.js, Express.js</ListItem>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8"}}>– Databases: MongoDB, Firebase</ListItem>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8"}}>– Cloud Services: AWS (EC2, S3, CloudFront), Vercel, Netlify</ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Dự án ngoài" ref={el => sectionsRef.current[3] = el}>
        <Typography variant="h3" fontWeight="bold">Dự án ngoài</Typography>
        <Typography variant="h5" mt={5} fontWeight="bold">Blog về lập trình</Typography>
        <Typography mt={2} color="#94a2b8">
          Tôi viết về kỹ thuật lập trình, open-source, và cuộc sống. 
          Mục đích của tôi là giúp đỡ các kỹ sư khác, tạo mối quan hệ, xây dựng cộng đồng. 
          Đến nay blog của tôi đã có 100k+ views.
        </Typography>
        <Typography variant="h5" mt={5} fontWeight="bold">Khóa học lập trình web online</Typography>
        <Typography mt={2} color="#94a2b8">
          Trong quá trình học lập trình web, tôi nhận ra được các khó khăn mà tôi cũng như các lập trình viên hay gặp phải. 
          Vì thế tôi đã phát triển các khóa học để giúp các học viên dễ dàng nắm vững các kiến thức nền tảng cũng như có được các project cuối khóa chất lượng để xin việc.
          Các khóa học được tôi đầu tư kỹ lưỡng về kiến thức và là một trong những khóa học chất lượng nhất trên thị trường lúc bấy giờ. 
          Có hơn 100 học viên từ Việt Nam cũng như ngoài nước tham gia các khóa này.
        </Typography>
        <Typography mt={2} color="#94a2b8">
          Tôi đã sử dụng Javascript, React, MongoDB, Node.js để xây dựng.
        </Typography>
        <List>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8" }}>– Link: Master Javascript – Xây dựng 10 project với JS thuần – Kiến thức đầy đủ để bắt đầu với mọi Javascript Framework</ListItem>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8" }}>– Link: Khóa học ReactJs Super - Dự án Shopee Clone Typescript  </ListItem>
        </List>
        <Typography variant="h5" mt={5} fontWeight="bold">App tự động đặt mua ICO</Typography>
        <Typography mt={2} color="#94a2b8">
          Đây là một app nho nhỏ phục vụ cho việc hẹn giờ mua ICO các đồng coin liên quan đến tiền kỹ thuật số. 
          Lúc đó là vào năm 2017 khi mà trend crypto đang nở rộ và nhu cầu mua crypto tăng cao, 
          tôi đã phát triển một app để hỗ trợ việc mua ICO một cách tự động và hàng loạt trên nhiều account khác nhau.
        </Typography>
        <Typography mt = {2} color="#94a2b8">
          App này nhanh chóng giúp tôi kiếm được 1000$ trong 3 ngày vào thời điểm đó và nhận được các lời mời về làm cho các cty công nghệ. Tôi cũng được báo kinh tế Cafebiz viết về sự kiện này.
        </Typography>
        <Typography mt = {2} color="#94a2b8">
          Tôi đã sử dụng Javascript để xây dựng sản phẩm.
        </Typography>
        <List>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8" }}>– Link: Dân lập trình kiếm tiền "ngon ơ" như thế nào: Sinh viên năm 3 ĐH Bách khoa Đà Nẵng viết 1 đoạn code trong 2 giờ, kiếm 1.000 USD sau 3 ngày</ListItem>
          <ListItem disablePadding sx={{ mt: 1 , color: "#94a2b8" }}>– Link: Youtube  </ListItem>
        </List>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Giáo dục" ref={el => sectionsRef.current[4] = el}>
        <Typography variant="h3" fontWeight="bold">Giáo dục</Typography>
        <Typography variant="h5" mt={5} fontWeight="bold">Kỹ sư phần mềm</Typography>
        <Typography mt={2} color="#94a2b8">Tôi đã tốt nghiệp từ trường Đại học ABC với bằng cử nhân khoa học máy tính...</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Giải thưởng" ref={el => sectionsRef.current[5] = el}>
        <Typography variant="h3" fontWeight="bold">Giải thưởng</Typography>
        <Typography mt={2} color="#94a2b8">Tôi đã đạt được nhiều giải thưởng về lập trình và công nghệ trong các cuộc thi quốc tế...</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box data-section="Thông tin liên hệ" ref={el => sectionsRef.current[6] = el}>
        <Typography variant="h3" fontWeight="bold">Thông tin liên hệ</Typography>
        <Typography mt={2} color="#94a2b8">Bạn có thể liên hệ với tôi qua email: email@example.com hoặc số điện thoại...</Typography>
      </Box>
    </Box>
  );
};

export default Content;
