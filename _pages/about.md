---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello! I am **Baiqi Li(李百奇)**, and I am currently a third-year **master student** at the School of Computer Science at **East China Normal University**, expecting to graduate this June. Concurrently, I am a research assistant at **Carnegie Mellon University**, working under the guidance of Professor [Deva Ramanan](https://www.cs.cmu.edu/~deva/). My current research focuses on computer vision and language, especially evaluating, datasets and improving multimodal generative models.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔥 News
- *2024.06*: 🎉🎉 Our workshop paper [GenAI-Bench: A Holistic Benchmark for Compositional Text-to-Visual Generation](https://openreview.net/forum?id=hJm7qnW3ym) has been selected as **the best paper** at SynData4CV workshop @ CVPR2024.
- *2024.06*: We introduced GenAI-Bench for evaluating the performance of leading image and video **generation models** in various aspects of compositional text-to-visual generation and **various automated evaluation metrics**.: [GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation](https://arxiv.org/abs/2406.13743).
- *2024.06*: We proposed a **semi-automated** approach to collect a **vision-centric** benchmark, **NaturalBench**, for reliably evaluating VLMs: [NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples]().
- *2024.06*: 🎉🎉 Our workshop paper [GenAI-Bench: A Holistic Benchmark for Compositional Text-to-Visual Generation](https://openreview.net/forum?id=hJm7qnW3ym) has been selected for **oral** presentation at upcoming SynData4CV workshop @ CVPR2024.
- *2024.04*: We introduced VQAScore for evaluating the prompt alignment of text-to-image/video/3D models: [Evaluating Text-to-Visual Generation with Image-to-Text Generation](https://arxiv.org/pdf/2404.01291.pdf).
- *2023*: [Federated Learning Vulnerabilities: Privacy Attacks with Denoising Diffusion Probabilistic Models](https://dl.acm.org/doi/abs/10.1145/3589334.3645514), Hongyan Gu, Xinyan Zhang, Jiang Li, Hui Wei, **Baiqi Li**, Xinli Huang, accepted by WWW'24. 
- *2023*: [Federated Learning on Distributed Graphs Considering Multiple Heterogeneities](https://ieeexplore.ieee.org/abstract/document/10447691), **Baiqi Li**; Yedi Ma; Yufei Liu; Hongyan Gu; Xinli Huang, accepted by ICASSP'24.
<!-- - *2020.06*: &nbsp;🎉🎉 Best Paper Nomination at CVPR'20 for [Visual Chirality](https://linzhiqiu.github.io/papers/chirality/)! -->

# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In submission.</div><img src='papers/vqascore/images/vqascore.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Evaluating Text-to-Visual Generation with Image-to-Text Generation**

[Zhiqiu Lin](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), **Baiqi Li**, [Emily Li](https://linzhiqiu.github.io/papers/vqascore/), [Xide Xia](https://xidexia.github.io/), [Graham Neubig](https://phontron.com/), [Pengchuan Zhang\*](https://pzzhang.github.io/pzzhang/), [Deva Ramanan\*](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/vqascore/) \| [Arxiv](https://arxiv.org/pdf/2404.01291.pdf) \| [![](https://img.shields.io/github/stars/linzhiqiu/t2v_metrics?style=social&label=Code+Stars)](https://github.com/linzhiqiu/t2v_metrics)
- We propose VQAScore, the state-of-the-art alignment metric for text-to-image/video/3D models.
- VQAScore based on our new CLIP-FlanT5 model outperforms previous metrics based on GPT-4Vision or costly human feedback.

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In submission</div><img src='papers\genai_bench\images\genaibench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**GenAI-Bench: Evaluating and Improving Compositional Text-to-Visual Generation**

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Emily Li](https://linzhiqiu.github.io/papers/vqascore/), Feiyi Xin, Kewen Wu, Tiffany Ling, [Xide Xia](https://xidexia.github.io/), [Pengchuan Zhang\*](https://pzzhang.github.io/pzzhang/), [Graham Neubig](https://phontron.com/), [Deva Ramanan\*](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/genai_bench) \| [Arxiv]() \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/GenAI-Bench)
- We conduct an extensive human study on compositional text-to-visual generation using **GenAI-Bench**, revealing limitations of leading open-source and closed-source models. 
- We present a simple black-box approach that improves generation by **ranking** images with VQAScore, significantly surpassing other scoring methods by 2x to 3x. 
- We will release **GenAI-Rank** with over 40,000 human ratings to benchmark methods that rank images generated from the same prompt.
</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">In submission</div><img src='papers\naturalbench\images\natural_teaser.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**NaturalBench: Evaluating Vision-Language Models on Natural Adversarial Samples**

**Baiqi Li**\*, [Zhiqiu Lin\*](https://linzhiqiu.github.io/), [Wenxuan Peng](https://lilydaytoy.github.io/)\*, [Jean de Dieu Nyandwi](https://nyandwi.com/)\*, Daniel Jiang, [Zixian Ma](https://zixianma.github.io/), [Simran Khanuja](https://simran-khanuja.github.io/), [Ranjay Krishna](https://www.ranjaykrishna.com/index.html), [Graham Neubig](https://phontron.com/), [Deva Ramanan\*](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/naturalbench) \| [Arxiv]() \| [HuggingFace](https://huggingface.co/datasets/BaiqiL/NaturalBench) 
- In this work, we show that VLMs still struggle with natural images and questions that humans can easily answer, which we term **natural adversarial samples**.
- We propose a semi-automated approach to collect a new benchmark, **NaturalBench**, for reliably evaluating VLMs with over 10,000 human-verified VQA samples.
- Crucially, we adopt a **vision-centric** design by pairing each question with two images that yield different answers, preventing ``blind'' solutions from answering without using the images.
</div>
</div>

<!-- </div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='papers/visual_gpt_score/images/teaser_small_new.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

<!-- **Revisiting the Role of Language Priors in Vision-Language Models (VisualGPTScore)**

**Zhiqiu Lin**\*, [Xinyue Chen\*](https://www.linkedin.com/in/xinyue-chen-073a4114b/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Pengchuan Zhang](https://pzzhang.github.io/pzzhang/), [Deva Ramanan](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/visual_gpt_score/) \| [Arxiv](http://arxiv.org/abs/2306.01879) \| [![](https://img.shields.io/github/stars/linzhiqiu/visual_gpt_score?style=social&label=Code+Stars)](https://github.com/linzhiqiu/visual_gpt_score)
- We use generative VLMs to implement **Visual** **G**enerative **P**re-**T**raining Score (**VisualGPTScore**), i.e., the probablity score of generating a text given an image.
- Such a generative score achieves top-tier image-text retrieval performance on multiple compositionality benchmarks, surpassing all discriminative approaches by a great margin. 
- We further investigate the role of language prior P(text) through a probablistic lens, and introduce a debiasing solution that consistently improves the VisualGPTScore under train-test distribution shifts over text.

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='papers/leco/images/dalle3_inversion_new.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

<!-- **Language Models as Black-Box Optimizers for Vision-Language Models**

**Zhiqiu Lin**\*, [Shihong Liu\*](https://llm-can-optimize-vlm.github.io/), [Samuel Yu\*](https://scholar.google.com/citations?user=gxRDkLMAAAAJ&hl=en), [Ryan Lee](https://llm-can-optimize-vlm.github.io/), [Tiffany Ling](https://llm-can-optimize-vlm.github.io/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Deva Ramanan](https://www.cs.cmu.edu/~deva/)

[Website](https://llm-can-optimize-vlm.github.io/) \| [Arxiv](https://arxiv.org/pdf/2309.05950.pdf)
- We use ChatGPT to effectively optimize vision-language models without white-box access to model weights or gradients.
- We show successful applications in visual classification, text-to-image generation and personalization.

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='papers/leco/images/tailed_frog_v3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

<!-- **The Neglected Tails of Vision-Language Models**

**Zhiqiu Lin**\*, [Shubham Parashar\*](https://shubhamprshr27.github.io/), [Tian Liu\*](https://www.linkedin.com/in/tian1327), [Xiangjue Dong](https://www.linkedin.com/in/xiangjue-dong), [Yanan Li](https://shubhamprshr27.github.io/neglected-tails-of-vlms/), [Deva Ramanan](https://www.cs.cmu.edu/~deva/), [James Caverlee](https://shubhamprshr27.github.io/neglected-tails-of-vlms/), [Shu Kong](https://shubhamprshr27.github.io/neglected-tails-of-vlms/)

[Website](https://shubhamprshr27.github.io/neglected-tails-of-vlms/) \| [Arxiv](https://arxiv.org/pdf/2401.12425.pdf)
- Popular vision-language models (CLIP, MetaCLIP, OpenCLIP) are all long-tailed learners trained on drastically imbalanced web data, causing biases in downstream applications such as visual chatbots (GPT-4Vision) and T2I generation (Stable Diffusion, DALL-E 3).
- We fix these biases through our SOTA prompting and retrieval-augmented strategies.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2023</div><img src='papers/cross_modal/images/neuro.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

<!-- **Multimodality Helps Unimodality: Cross-Modal Few-Shot Learning with Multimodal Models**

**Zhiqiu Lin**\*, [Samuel Yu\*](https://scholar.google.com/citations?user=gxRDkLMAAAAJ&hl=en), [Zhiyi Kuang](https://www.linkedin.com/in/zhiyikuang/), [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Deva Ramanan](https://www.cs.cmu.edu/~deva/)

[Website](https://linzhiqiu.github.io/papers/cross_modal/) \| [Arxiv](http://arxiv.org/abs/2301.06267) \| [![](https://img.shields.io/github/stars/linzhiqiu/cross_modal_adaptation?style=social&label=Code+Stars)](https://github.com/linzhiqiu/cross_modal_adaptation)
- We propose a simple cross-modal adaptation method for multimodal models that repurposes information from other modalities (e.g., class names and audio clips) as additional training samples.
- For CLIP, it achieves SOTA few-shot adaptation performance even with a simple **linear probe**, and consistently improves prior art such as prompting, adapter, and weight ensembling.
- Audiovisual experiments with AudioCLIP suggest that one can learn a better dog **visual** classifier by **listening** to them bark.

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2022</div><img src='papers/leco/images/teaser.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LECO: Continual Learning with Evolving Class Ontologies**

**Zhiqiu Lin**, [Deepak Pathak](https://www.cs.cmu.edu/~dpathak/), [Yu-Xiong Wang](https://yxw.web.illinois.edu/), [Deva Ramanan\*](https://www.cs.cmu.edu/~deva/), [Shu Kong\*](https://aimerykong.github.io/) -->

<!-- [Website](https://linzhiqiu.github.io/papers/leco/) \| [Arxiv](https://arxiv.org/abs/2210.04993) \| [NeurIPS'22 Talk](/papers/leco/LECO.pdf)
- A practical lifelong vision benchmark motivated by real-world dataset versioning issues, e.g., Mapillary 1.2 to 2.0.
- Simple but effective solutions such as joint training, semi-supervised learning, and learning-with-partial-labels to address inconsistent annotation (both coarse-grained and fine-grained).

</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2021 (Datasets and Benchmarks)</div><img src='images/clear/icon_text.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**The CLEAR Benchmark: Continual LEArning on Real-World Imagery**

**Zhiqiu Lin**, [Jia Shi](https://www.linkedin.com/in/elvishelvisshi/), [Deepak Pathak\*](https://www.cs.cmu.edu/~dpathak/), [Deva Ramanan\*](https://www.cs.cmu.edu/~deva/)

[CLEAR Wiki](https://linzhiqiu.gitbook.io/the-clear-benchmark/) \| [NeurIPS Paper Site](http://clear-benchmark.github.io) \| [Arxiv](https://arxiv.org/abs/2201.06289) \| [CVPR'22 Talk](/papers/clear/clear_cvpr.pdf)
- The first continual benchmark for visual recognition with natural distribution shifts over a decade!
- CLEAR has a 10- and 100-classes version ([download links](https://linzhiqiu.gitbook.io/the-clear-benchmark/)), similar to the famous CIFAR-10 and CIFAR-100 benchmarks.
- [1st CLEAR challenge](https://www.aicrowd.com/challenges/cvpr-2022-clear-challenge) was hosted on June 19th, 2022. We have 79 participants from 21 different countries and regions signed up for the challenge! -->

<!-- </div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2020 (Best Paper Nomination)</div><img src='images/chirality/mirror.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Visual Chirality**

**Zhiqiu Lin**, [Jin Sun](http://www.cs.cornell.edu/~jinsun/), [Abe Davis](http://abedavis.com), [Noah Snavely](http://www.cs.cornell.edu/~snavely/)

[Website](https://linzhiqiu.github.io/papers/chirality/) \| [Arxiv](https://arxiv.org/abs/2006.09512) \| [Video](https://www.youtube.com/watch?v=gc5IvTozU9M) \| [![](https://img.shields.io/github/stars/linzhiqiu/digital_chirality?style=social&label=Code+Stars)](https://github.com/linzhiqiu/digital_chirality)
- How does reflection change what we learn from images? Despite widespread use in data augmentation, people had not looked closely at this question before our work. -->

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->
<!-- </div>
</div>

- [QPyTorch: A Low-Precision Arithmetic Simulation Framework](https://arxiv.org/abs/1910.04540).
 [Tianyi Zhang](https://tiiiger.github.io), **Zhiqiu Lin**, [Guandao Yang](https://www.guandaoyang.com), [Chris De Sa](http://www.cs.cornell.edu/~cdesa/), **NeurIPS 2019 Workshop @ EMC2** \| [![](https://img.shields.io/github/stars/Tiiiger/QPyTorch?style=social&label=Code+Stars)](https://github.com/Tiiiger/QPyTorch)
- [What.Hack: Engaging Anti-Phishing Training Through a Role-playing Cyber Defense Simulation Game](https://dl.acm.org/doi/abs/10.1145/3290605.3300338).
 [Zikai Alex Wen](https://www.cs.cornell.edu/~zkwen/), **Zhiqiu Lin**, Rowena Chen, [Erik Andersen](http://www.cs.cornell.edu/~eland/), **CHI 2019** -->
- *2023*: [Federated Learning Vulnerabilities: Privacy Attacks with Denoising Diffusion Probabilistic Models](https://dl.acm.org/doi/abs/10.1145/3589334.3645514), Hongyan Gu, Xinyan Zhang, Jiang Li, Hui Wei, **Baiqi Li**, Xinli Huang, accepted by WWW'24. 
- *2023*: [Federated Learning on Distributed Graphs Considering Multiple Heterogeneities](https://ieeexplore.ieee.org/abstract/document/10447691), **Baiqi Li**; Yedi Ma; Yufei Liu; Hongyan Gu; Xinli Huang, accepted by ICASSP'24.
<br>
<br>

# 🎖 Honors and Services
- Reviewer: 2023 ECAI, Transactions on Intelligent Systems and Technology.

<!-- - *2020.06* Best Paper Nomination at CVPR'20 for [Visual Chirality](https://linzhiqiu.github.io/papers/chirality/)!
- *2020.05* Graduated Summa Cum Laude in Computer Science and Mathematics from Cornell University, and served as college symbol bearer (top 5 of the college). -->
<!-- - *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📖 Research Experience
- *2023.06 - present, Research Assistant, Carnegie Mellon University. 
- *2021.09 - 2024.06, Master student, East China Normal University. 

# 💬 Invited Talks
- *2024.05*, I presented [GenAI-Bench/NaturalBench Benchmark] at CMU.
<!-- - *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 💻 Services
- Organizer: CVPR’22 VPLOW Workshop (Challenge Track)
- Reviewer: ECCV, CVPR (Outstanding reviewer), ICCV, NeurIPS, ICML.
- Teaching (CMU): [Learning-based Image Synthesis](https://learning-image-synthesis.github.io/sp22/) and Advanced Computer Vision
- Teaching (Cornell): Advanced Machine Learning, Cornell Tech Pre-Master Program, Functional Programming, Algorithm Analysis, Data Structures, Computer Vision -->