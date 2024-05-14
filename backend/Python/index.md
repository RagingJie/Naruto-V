# 初识新语言——《Python3》
## Python3 简介
Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。

Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。

- Python 是一种解释型语言： 这意味着开发过程中没有了编译这个环节。类似于PHP和Perl语言。
- Python 是交互式语言： 这意味着，您可以在一个 Python 提示符 >>> 后直接执行代码。
- Python 是面向对象语言: 这意味着Python支持面向对象的风格或代码封装在对象的编程技术。
- Python 是初学者的语言：Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。
## Python3 特点
1. 易于学习：Python有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单。
2. 易于阅读：Python代码定义的更清晰。
3. 易于维护：Python的成功在于它的源代码是相当容易维护的。
4. 一个广泛的标准库：Python的最大的优势之一是丰富的库，跨平台的，在UNIX，Windows和Macintosh兼容很好。
5. 互动模式：互动模式的支持，您可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断。
6. 可移植：基于其开放源代码的特性，Python已经被移植（也就是使其工作）到许多平台。
7. 可扩展：如果你需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，你可以使用C或C++完成那部分程序，然后从你的Python程序中调用。
8. 数据库：Python提供所有主要的商业数据库的接口。
9. GUI编程：Python支持GUI可以创建和移植到许多系统调用。
10. 可嵌入: 你可以将Python嵌入到C/C++程序，让你的程序的用户获得"脚本化"的能力。
## Python 应用
- Youtube - 视频社交网站
- Reddit - 社交分享网站
- Dropbox - 文件分享服务
- 豆瓣网 - 图书、唱片、电影等文化产品的资料数据库网站
- 知乎 - 一个问答网站
- 果壳 - 一个泛科技主题网站
- Bottle - Python微Web框架
- EVE - 网络游戏EVE大量使用Python进行开发
- Blender - 使用Python作为建模工具与GUI语言的开源3D绘图软件
- Inkscape - 一个开源的SVG矢量图形编辑器。
- ...
## ===基础篇===
**快速入门** 

开始Python的第一个程序，输出：“Hello World！” 

```py
# -*- coding: UTF-8 -*-

# Filename : helloworld.py
# author by : www.qzxdp.cn

# 该实例输出 Hello World!
print('Hello World!')
```
执行以上代码输出结果为：
```
Hello World！
```
## Python3 基础语法
### 编码
默认情况下，Python 3 源码文件以 UTF-8 编码，所有字符串都是 unicode 字符串。 当然你也可以为源码文件指定不同的编码：
```py
# -*- coding: cp-1252 -*-
```
上述定义允许在源文件中使用 Windows-1252 字符集中的字符编码，对应适合语言为保加利亚语、白俄罗斯语、马其顿语、俄语、塞尔维亚语。
### 标识符
- 第一个字符必须是字母表中**字母**或**下划线 _** 。
- 标识符的其他的部分由**字母**、**数字**和**下划线**组成。
- 标识符对**大小写敏感**。

在 Python 3 中，<u>可以用中文作为变量名，非 ASCII 标识符也是允许的了。</u>
### python保留字
保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字
```py
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```
### 注释
Python中单行注释以 # 开头，实例如下

实例(Python 3.0+)
```py
#!/usr/bin/python3
 
# 第一个注释
print ("Hello, Python!") # 第二个注释
```
执行以上代码，输出结果为
```
Hello, Python!
```
多行注释可以用多个 # 号，还有 ''' 和 """

实例(Python 3.0+)
```py
#!/usr/bin/python3
 
# 第一个注释
# 第二个注释
 
'''
第三注释
第四注释
'''
 
"""
第五注释
第六注释
"""
print ("Hello, Python!")
```
执行以上代码，输出结果为
```
Hello, Python!
```
### 行与缩进
python最具特色的就是使用缩进来表示代码块，不需要使用**大括号 {}**。

缩进的空格数是可变的，但是同一个代码块的语句必须包含**相同的缩进空格数**。实例如下：

实例(Python 3.0+)
```py
if True:
    print ("True")
else:
    print ("False")
```
以下代码最后一行语句缩进数的空格数不一致，会导致运行错误
```py
if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
  print ("False")    # 缩进不一致，会导致运行错误
```
以上程序由于缩进不一致，执行后会出现类似以下错误
```
File "test.py", line 6
    print ("False")    # 缩进不一致，会导致运行错误
                                      ^
IndentationError: unindent does not match any outer indentation level
```
### 多行语句
Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠 \ 来实现多行语句，例如
```py
total = item_one + \
        item_two + \
        item_three
```
在 [], {}, 或 () 中的多行语句，不需要使用反斜杠 \，例如
```py
total = ['item_one', 'item_two', 'item_three',
        'item_four', 'item_five']
```
