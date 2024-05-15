# 技术问题笔记
## Java 发邮件
### 前言
今日在做项目时突发奇想，用户登录系统时，需要账号密码登录，于是，我想让用户用自己的邮箱进行注册登录。于是，我便想到了用Java 发送邮件的需求实现。废话不多说，直接上实战。

### 实现发邮件
 
#### 1.首先需要导入email的依赖
```xml
<dependency>
    <groupId>com.sun.mail</groupId>
    <artifactId>javax.mail</artifactId>
    <version>1.6.2</version>
</dependency>
```
#### 2.发送邮件时间的方法
```java
package com.service.naruto.controller;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

/**
 * @Author Naruto
 * @Date 2024/5/15 13:58
 * @Description: 发邮件
 */
public class SendEmail {

    public static void main(String[] args) {
        // 收件人邮箱地址
        String to = "recipient@example.com";
        // 发件人邮箱地址
        String from = "your-email@gmail.com";
        // 发件人邮箱密码或应用专用密码
        String password = "your-password-or-app-specific-password";

        // 网易云邮箱授权密码：
        // 设置邮件服务器的属性
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.163.com"); // 网易云 SMTP服务器地址
        props.put("mail.smtp.port", "25"); // 网易云 SMTP端口号
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true"); // 启用TLS加密

        // 创建Session实例对象
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            // 创建MimeMessage实例对象
            MimeMessage message = new MimeMessage(session);

            // 设置发件人
            message.setFrom(new InternetAddress(from));
            // 设置收件人
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            // 设置邮件主题
            message.setSubject("Java邮件测试");
            // 设置邮件正文
            message.setText("这是一封由《Naruto》创建发送的邮件。");

            // 发送邮件
            int count = 1;
            while (count <= 5) {
                Transport.send(message);
                System.out.println("发送："+count+"条邮箱信息");
                count++;
            }

            System.out.println("邮件发送成功！");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

}
```
### 补充
本次测试是使用的网易云邮箱进行发送邮件的，所以以此为例子，获取邮箱的SMTP
- 1.首先登录网易云邮箱
- 2.操作如下

设置 -> POP3/SMTP/IMAP -> 开启服务 -> 保存授权码（发送邮件的登录密码）


| 协议类型 | 协议功能 | 服务器地址   | 非SSL端口号 | SSL端口号 |
| -------- | -------- | ------------ | ----------- | --------- |
| SMTP     | 发送邮件 | smtp.163.com | 25          | 465       |
| POP      | 接收邮件 | pop.163.com  | 110         | 995       |
| IMAP     | 接收邮件 | imap.163.com | 143         | 993       |

网易云邮箱配置详细步骤：[点击查看](https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac2a5feb28b66796d3b)

