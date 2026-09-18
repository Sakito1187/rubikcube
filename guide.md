# ルービックキューブを速く揃える

[トップ](index.html) · [クロス](cross.html) · [F2L入門](f2l.html) · [OLL](oll.html) · [PLL](pll.html)

以下はOLL・PLLの印刷／画像用一覧です。F2Lの途中配置つき解説は[F2L入門](f2l.html)へ。

## 初期配置図から探す

<div class="toc-phase"><h3>前半：黄色の十字を作る</h3><div class="toc-grid"><a href="#oll-front-line"><img src="images/initial_02.png" alt="直線型の上面と側面" width="150" loading="lazy"><small>直線型</small></a><a href="#oll-front-l"><img src="images/initial_03.png" alt="L字型の上面と側面" width="150" loading="lazy"><small>L字型</small></a><a href="#oll-front-dot"><img src="images/initial_04.png" alt="ドット型の上面と側面" width="150" loading="lazy"><small>ドット型</small></a></div></div>
<div class="toc-phase"><h3>後半：黄色一面をそろえる</h3><div class="toc-grid"><a href="#oll-back-sune"><img src="images/initial_05.png" alt="スーンの上面と側面" width="150" loading="lazy"><small>スーン</small></a><a href="#oll-back-antisune"><img src="images/initial_06.png" alt="アンチスーンの上面と側面" width="150" loading="lazy"><small>アンチスーン</small></a><a href="#oll-back-h"><img src="images/initial_07.png" alt="十字Hの上面と側面" width="150" loading="lazy"><small>十字H</small></a><a href="#oll-back-l"><img src="images/initial_08.png" alt="十字Lの上面と側面" width="150" loading="lazy"><small>十字L</small></a><a href="#oll-back-t"><img src="images/initial_09.png" alt="十字Tの上面と側面" width="150" loading="lazy"><small>十字T</small></a><a href="#oll-back-pi"><img src="images/initial_10.png" alt="十字πの上面と側面" width="150" loading="lazy"><small>十字π</small></a><a href="#oll-back-u"><img src="images/initial_11.png" alt="十字Uの上面と側面" width="150" loading="lazy"><small>十字U</small></a></div></div>
<div class="toc-phase"><h3>前半：コーナーの位置をそろえる</h3><div class="toc-grid"><a href="#pll-front-t"><img src="images/initial_12.png" alt="Tパームの上面と側面" width="150" loading="lazy"><small>Tパーム</small></a><a href="#pll-front-y"><img src="images/initial_13.png" alt="Yパームの上面と側面" width="150" loading="lazy"><small>Yパーム</small></a></div></div>
<div class="toc-phase"><h3>後半：エッジの位置をそろえる</h3><div class="toc-grid"><a href="#pll-back-ua"><img src="images/initial_14.png" alt="Uaパームの上面と側面" width="150" loading="lazy"><small>Uaパーム</small></a><a href="#pll-back-ub"><img src="images/initial_15.png" alt="Ubパームの上面と側面" width="150" loading="lazy"><small>Ubパーム</small></a><a href="#pll-back-h"><img src="images/initial_16.png" alt="Hパームの上面と側面" width="150" loading="lazy"><small>Hパーム</small></a><a href="#pll-back-z"><img src="images/initial_17.png" alt="Zパームの上面と側面" width="150" loading="lazy"><small>Zパーム</small></a></div></div>

## 2Look OLL 前半

<a id="oll-front-line"></a>
### 直線型

[![直線型の初期配置と矢印付き手順](images/cube_02.png)](images/cube_02.svg)

黄色エッジの直線を横向きに置きます。コーナーの色は問いません。

`F` → セクシームーブ：`R U R' U'` → `F'`

<a id="oll-front-l"></a>
### L字型

[![L字型の初期配置と矢印付き手順](images/cube_03.png)](images/cube_03.svg)

黄色エッジを右と手前に置きます。Fw は手前2層を一緒に回します。

`Fw` → セクシームーブ：`R U R' U'` → `Fw'`

<a id="oll-front-dot"></a>
### ドット型

[![ドット型の初期配置と矢印付き手順](images/cube_04.png)](images/cube_04.svg)

黄色エッジが0個。L字の手順 → U′ → 直線の手順の順に回します。

`Fw` → セクシームーブ：`R U R' U'` → `Fw'` → 向きを合わせる：`U'` → `F` → セクシームーブ：`R U R' U'` → `F'`

## 2Look OLL 後半

<a id="oll-back-sune"></a>
### スーン

[![スーンの初期配置と矢印付き手順](images/cube_05.png)](images/cube_05.svg)

上面の黄色コーナーは手前左。右側の奥に黄色が見える向きに置きます。

スーン：`R U R' U R U2' R'`

<a id="oll-back-antisune"></a>
### アンチスーン

[![アンチスーンの初期配置と矢印付き手順](images/cube_06.png)](images/cube_06.svg)

上面の黄色コーナーは奥右。左側の奥に黄色が見える向きに置きます。

アンチスーン：`R U2' R' U' R U' R'`

<a id="oll-back-h"></a>
### 十字H

[![十字Hの初期配置と矢印付き手順](images/cube_07.png)](images/cube_07.svg)

奥と手前の側面に黄色が2個ずつ。アンチスーンの途中にセクシームーブを挟みます。

アンチスーン①：`R U2' R' U'` → セクシームーブ：`R U R' U'` → アンチスーン②：`R U' R'`

<a id="oll-back-l"></a>
### 十字L

[![十字Lの初期配置と矢印付き手順](images/cube_08.png)](images/cube_08.svg)

黄色コーナーが奥右・手前左にある向き。ほぼセクシームーブの最初だけ右2層です。

`F'` → ほぼセクシームーブ：`Rw U R' U'` → `Rw' F R`

<a id="oll-back-t"></a>
### 十字T

[![十字Tの初期配置と矢印付き手順](images/cube_09.png)](images/cube_09.svg)

上面の右側2個のコーナーが黄色。奥・手前の左端にも黄色が見えます。

ほぼセクシームーブ：`Rw U R' U'` → `Rw' F R F'`

<a id="oll-back-pi"></a>
### 十字π

[![十字πの初期配置と矢印付き手順](images/cube_10.png)](images/cube_10.svg)

左側に黄色が2個、奥と手前の右端に黄色が1個ずつ。リズム：12 / 21212 / 21。

12：`R U2'` → 21212：`R2' U' R2 U' R2'` → 21：`U2' R`

<a id="oll-back-u"></a>
### 十字U

[![十字Uの初期配置と矢印付き手順](images/cube_11.png)](images/cube_11.svg)

奥の2個のコーナーが黄色。手前の側面に黄色が2個見える向きに置きます。

R2 → D：`R2 D` → 共通の動き：`R' U2` → R → D′：`R D'` → 共通の動き：`R' U2` → `R'`

## 2Look PLL 前半

<a id="pll-front-t"></a>
### Tパーム

[![Tパームの初期配置と矢印付き手順](images/cube_12.png)](images/cube_12.svg)

同色のコーナーペアを左側に置きます。エッジの色は、この段階では問いません。

セクシームーブ：`R U R' U'` → `R' F R2 U' R' U'` → セクシームーブ3手：`R U R'` → `F'`

<a id="pll-front-y"></a>
### Yパーム

[![Yパームの初期配置と矢印付き手順](images/cube_13.png)](images/cube_13.svg)

同色のコーナーペアがないケース。側面のコーナー配色を図の向きに合わせます。

`F R U' R' U'` → セクシームーブ3手：`R U R'` → `F'` → セクシームーブ：`R U R' U'` → `R' F R F'`

## 2Look PLL 後半

<a id="pll-back-ua"></a>
### Uaパーム

[![Uaパームの初期配置と矢印付き手順](images/cube_14.png)](images/cube_14.svg)

揃った面を奥に置き、手前のコーナーと同色のエッジが左側にある向きです。

`M2' U M U2 M' U M2'`

<a id="pll-back-ub"></a>
### Ubパーム

[![Ubパームの初期配置と矢印付き手順](images/cube_15.png)](images/cube_15.svg)

揃った面を奥に置き、手前のコーナーと同色のエッジが右側にある向きです。

`M2' U' M U2 M' U' M2'`

<a id="pll-back-h"></a>
### Hパーム

[![Hパームの初期配置と矢印付き手順](images/cube_16.png)](images/cube_16.svg)

向かい合うエッジを交換します。リズム：212 / 2 / 212。

212：`M2' U M2'` → 2：`U2` → 212：`M2' U M2'`

<a id="pll-back-z"></a>
### Zパーム

[![Zパームの初期配置と矢印付き手順](images/cube_17.png)](images/cube_17.svg)

奥↔左、手前↔右を交換。2121 / 12221 の後、U2 で側面センターに合わせます。

2121：`M2' U M2' U` → 12221：`M' U2 M2' U2 M'` → 最後の面合わせ：`U2`


手順の参考：[元の解説動画](https://www.youtube.com/watch?v=cEtg0IMPVQs)。図は独自に描画しています。
