window.quizData = window.quizData || {};
window.quizData.kcsa = [
  {
    "question": "【CNCF KCSA 第1問】Kubernetesセキュリティ基礎：最小権限の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを無効化する。",
      "Podを常に特権実行する。",
      "必要最小限の権限だけを付与してリスクを下げる。",
      "全ユーザーへcluster-adminを付与する。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 試験対策で重視すべき基本理解として、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第2問】Kubernetesセキュリティ基礎：最小権限の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを無効化する。",
      "Podを常に特権実行する。",
      "必要最小限の権限だけを付与してリスクを下げる。",
      "全ユーザーへcluster-adminを付与する。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 運用時に注意すべき判断として、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第3問】Kubernetesセキュリティ基礎：最小権限のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Podを常に特権実行する。",
      "全ユーザーへcluster-adminを付与する。",
      "監査ログを無効化する。",
      "必要最小限の権限だけを付与してリスクを下げる。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 トラブルシュート時の確認点として、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第4問】Kubernetesセキュリティ基礎：最小権限の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "全ユーザーへcluster-adminを付与する。",
      "監査ログを無効化する。",
      "必要最小限の権限だけを付与してリスクを下げる。",
      "Podを常に特権実行する。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 設計で採用すべき考え方として、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第5問】Kubernetesセキュリティ基礎：最小権限の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "必要最小限の権限だけを付与してリスクを下げる。",
      "全ユーザーへcluster-adminを付与する。",
      "Podを常に特権実行する。",
      "監査ログを無効化する。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 管理者が説明すべき役割として、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第6問】Kubernetesセキュリティ基礎：最小権限の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを無効化する。",
      "必要最小限の権限だけを付与してリスクを下げる。",
      "Podを常に特権実行する。",
      "全ユーザーへcluster-adminを付与する。"
    ],
    "answer": "必要最小限の権限だけを付与してリスクを下げる。",
    "explanation": "KubernetesではRBACやServiceAccountで最小権限を設計します。 実務で誤解しやすいポイントとして、最小権限の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第7問】Kubernetesセキュリティ基礎：多層防御の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "単一のパスワードだけに依存する。",
      "イメージ検証を禁止する。",
      "すべての通信を平文にする。",
      "複数の防御策を組み合わせて侵害リスクを低減する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 試験対策で重視すべき基本理解として、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第8問】Kubernetesセキュリティ基礎：多層防御の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "すべての通信を平文にする。",
      "イメージ検証を禁止する。",
      "複数の防御策を組み合わせて侵害リスクを低減する。",
      "単一のパスワードだけに依存する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 運用時に注意すべき判断として、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第9問】Kubernetesセキュリティ基礎：多層防御のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "すべての通信を平文にする。",
      "単一のパスワードだけに依存する。",
      "複数の防御策を組み合わせて侵害リスクを低減する。",
      "イメージ検証を禁止する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 トラブルシュート時の確認点として、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第10問】Kubernetesセキュリティ基礎：多層防御の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "単一のパスワードだけに依存する。",
      "すべての通信を平文にする。",
      "複数の防御策を組み合わせて侵害リスクを低減する。",
      "イメージ検証を禁止する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 設計で採用すべき考え方として、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第11問】Kubernetesセキュリティ基礎：多層防御の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "複数の防御策を組み合わせて侵害リスクを低減する。",
      "すべての通信を平文にする。",
      "イメージ検証を禁止する。",
      "単一のパスワードだけに依存する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 管理者が説明すべき役割として、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第12問】Kubernetesセキュリティ基礎：多層防御の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "単一のパスワードだけに依存する。",
      "すべての通信を平文にする。",
      "複数の防御策を組み合わせて侵害リスクを低減する。",
      "イメージ検証を禁止する。"
    ],
    "answer": "複数の防御策を組み合わせて侵害リスクを低減する。",
    "explanation": "認証、認可、ネットワーク制御、監査などを組み合わせます。 実務で誤解しやすいポイントとして、多層防御の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第13問】Kubernetesセキュリティ基礎：セキュリティ境界の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "Podは常に完全な強境界であるとみなす。",
      "API Serverを匿名公開する。",
      "全テナントを同一権限にする。",
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 試験対策で重視すべき基本理解として、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第14問】Kubernetesセキュリティ基礎：セキュリティ境界の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
      "全テナントを同一権限にする。",
      "API Serverを匿名公開する。",
      "Podは常に完全な強境界であるとみなす。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 運用時に注意すべき判断として、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第15問】Kubernetesセキュリティ基礎：セキュリティ境界のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
      "API Serverを匿名公開する。",
      "全テナントを同一権限にする。",
      "Podは常に完全な強境界であるとみなす。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 トラブルシュート時の確認点として、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第16問】Kubernetesセキュリティ基礎：セキュリティ境界の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "API Serverを匿名公開する。",
      "全テナントを同一権限にする。",
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
      "Podは常に完全な強境界であるとみなす。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 設計で採用すべき考え方として、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第17問】Kubernetesセキュリティ基礎：セキュリティ境界の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Podは常に完全な強境界であるとみなす。",
      "API Serverを匿名公開する。",
      "全テナントを同一権限にする。",
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 管理者が説明すべき役割として、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第18問】Kubernetesセキュリティ基礎：セキュリティ境界の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "全テナントを同一権限にする。",
      "Podは常に完全な強境界であるとみなす。",
      "API Serverを匿名公開する。",
      "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。"
    ],
    "answer": "Namespaceやクラスタ、ノードなどの分離単位を理解して設計する。",
    "explanation": "Kubernetesの分離特性を正しく理解することが重要です。 実務で誤解しやすいポイントとして、セキュリティ境界の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第19問】Kubernetesセキュリティ基礎：脅威モデリングの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "攻撃経路や資産を整理し、防御策を検討する活動である。",
      "CIを停止する手順である。",
      "Pod数を常に増やす設定である。",
      "障害後にログを削除する作業である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 試験対策で重視すべき基本理解として、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第20問】Kubernetesセキュリティ基礎：脅威モデリングの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "障害後にログを削除する作業である。",
      "CIを停止する手順である。",
      "Pod数を常に増やす設定である。",
      "攻撃経路や資産を整理し、防御策を検討する活動である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 運用時に注意すべき判断として、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第21問】Kubernetesセキュリティ基礎：脅威モデリングのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Pod数を常に増やす設定である。",
      "攻撃経路や資産を整理し、防御策を検討する活動である。",
      "障害後にログを削除する作業である。",
      "CIを停止する手順である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 トラブルシュート時の確認点として、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第22問】Kubernetesセキュリティ基礎：脅威モデリングの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "CIを停止する手順である。",
      "障害後にログを削除する作業である。",
      "攻撃経路や資産を整理し、防御策を検討する活動である。",
      "Pod数を常に増やす設定である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 設計で採用すべき考え方として、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第23問】Kubernetesセキュリティ基礎：脅威モデリングの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "CIを停止する手順である。",
      "攻撃経路や資産を整理し、防御策を検討する活動である。",
      "Pod数を常に増やす設定である。",
      "障害後にログを削除する作業である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 管理者が説明すべき役割として、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第24問】Kubernetesセキュリティ基礎：脅威モデリングの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "攻撃経路や資産を整理し、防御策を検討する活動である。",
      "Pod数を常に増やす設定である。",
      "障害後にログを削除する作業である。",
      "CIを停止する手順である。"
    ],
    "answer": "攻撃経路や資産を整理し、防御策を検討する活動である。",
    "explanation": "KCSAではクラスタへの攻撃面の理解が重要です。 実務で誤解しやすいポイントとして、脅威モデリングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第25問】Kubernetesセキュリティ基礎：セキュアデフォルトの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "匿名認証を積極的に有効化する。",
      "特権コンテナを標準にする。",
      "安全な初期設定を採用し、危険な設定を避ける。",
      "シークレットを平文でGit管理する。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 試験対策で重視すべき基本理解として、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第26問】Kubernetesセキュリティ基礎：セキュアデフォルトの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "シークレットを平文でGit管理する。",
      "安全な初期設定を採用し、危険な設定を避ける。",
      "匿名認証を積極的に有効化する。",
      "特権コンテナを標準にする。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 運用時に注意すべき判断として、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第27問】Kubernetesセキュリティ基礎：セキュアデフォルトのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "安全な初期設定を採用し、危険な設定を避ける。",
      "匿名認証を積極的に有効化する。",
      "シークレットを平文でGit管理する。",
      "特権コンテナを標準にする。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 トラブルシュート時の確認点として、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第28問】Kubernetesセキュリティ基礎：セキュアデフォルトの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "シークレットを平文でGit管理する。",
      "特権コンテナを標準にする。",
      "安全な初期設定を採用し、危険な設定を避ける。",
      "匿名認証を積極的に有効化する。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 設計で採用すべき考え方として、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第29問】Kubernetesセキュリティ基礎：セキュアデフォルトの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "シークレットを平文でGit管理する。",
      "特権コンテナを標準にする。",
      "安全な初期設定を採用し、危険な設定を避ける。",
      "匿名認証を積極的に有効化する。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 管理者が説明すべき役割として、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第30問】Kubernetesセキュリティ基礎：セキュアデフォルトの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "シークレットを平文でGit管理する。",
      "匿名認証を積極的に有効化する。",
      "安全な初期設定を採用し、危険な設定を避ける。",
      "特権コンテナを標準にする。"
    ],
    "answer": "安全な初期設定を採用し、危険な設定を避ける。",
    "explanation": "初期構成の安全性は侵害リスクを大きく左右します。 実務で誤解しやすいポイントとして、セキュアデフォルトの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第31問】RBACと認証認可：Roleの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージを圧縮する形式である。",
      "Namespace内で許可する操作を定義する。",
      "NodeのCPUを制限する。",
      "クラスタ全体のPodログだけを保存する。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 試験対策で重視すべき基本理解として、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第32問】RBACと認証認可：Roleの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "NodeのCPUを制限する。",
      "Namespace内で許可する操作を定義する。",
      "クラスタ全体のPodログだけを保存する。",
      "コンテナイメージを圧縮する形式である。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 運用時に注意すべき判断として、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第33問】RBACと認証認可：Roleのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Namespace内で許可する操作を定義する。",
      "クラスタ全体のPodログだけを保存する。",
      "NodeのCPUを制限する。",
      "コンテナイメージを圧縮する形式である。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 トラブルシュート時の確認点として、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第34問】RBACと認証認可：Roleの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "Namespace内で許可する操作を定義する。",
      "コンテナイメージを圧縮する形式である。",
      "NodeのCPUを制限する。",
      "クラスタ全体のPodログだけを保存する。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 設計で採用すべき考え方として、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第35問】RBACと認証認可：Roleの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "クラスタ全体のPodログだけを保存する。",
      "コンテナイメージを圧縮する形式である。",
      "NodeのCPUを制限する。",
      "Namespace内で許可する操作を定義する。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 管理者が説明すべき役割として、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第36問】RBACと認証認可：Roleの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "Namespace内で許可する操作を定義する。",
      "クラスタ全体のPodログだけを保存する。",
      "コンテナイメージを圧縮する形式である。",
      "NodeのCPUを制限する。"
    ],
    "answer": "Namespace内で許可する操作を定義する。",
    "explanation": "RoleはNamespaceスコープ、ClusterRoleはクラスタスコープです。 実務で誤解しやすいポイントとして、Roleの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第37問】RBACと認証認可：RoleBindingの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
      "Secretを暗号化解除する。",
      "監査ログを削除する。",
      "Podのメモリを自動増加させる。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 試験対策で重視すべき基本理解として、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第38問】RBACと認証認可：RoleBindingの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Podのメモリを自動増加させる。",
      "Secretを暗号化解除する。",
      "監査ログを削除する。",
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 運用時に注意すべき判断として、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第39問】RBACと認証認可：RoleBindingのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
      "Secretを暗号化解除する。",
      "Podのメモリを自動増加させる。",
      "監査ログを削除する。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 トラブルシュート時の確認点として、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第40問】RBACと認証認可：RoleBindingの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "Podのメモリを自動増加させる。",
      "Secretを暗号化解除する。",
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
      "監査ログを削除する。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 設計で採用すべき考え方として、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第41問】RBACと認証認可：RoleBindingの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Podのメモリを自動増加させる。",
      "監査ログを削除する。",
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
      "Secretを暗号化解除する。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 管理者が説明すべき役割として、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第42問】RBACと認証認可：RoleBindingの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
      "Secretを暗号化解除する。",
      "Podのメモリを自動増加させる。",
      "監査ログを削除する。"
    ],
    "answer": "RoleやClusterRoleをユーザー、グループ、ServiceAccountへ割り当てる。",
    "explanation": "Bindingにより定義した権限が主体へ適用されます。 実務で誤解しやすいポイントとして、RoleBindingの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第43問】RBACと認証認可：ServiceAccountの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナのベースイメージである。",
      "PodがKubernetes APIへアクセスするためのIDとして使われる。",
      "外部DNSの契約名義である。",
      "ノードの物理シリアル番号である。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 試験対策で重視すべき基本理解として、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第44問】RBACと認証認可：ServiceAccountの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "外部DNSの契約名義である。",
      "コンテナのベースイメージである。",
      "ノードの物理シリアル番号である。",
      "PodがKubernetes APIへアクセスするためのIDとして使われる。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 運用時に注意すべき判断として、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第45問】RBACと認証認可：ServiceAccountのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナのベースイメージである。",
      "PodがKubernetes APIへアクセスするためのIDとして使われる。",
      "外部DNSの契約名義である。",
      "ノードの物理シリアル番号である。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 トラブルシュート時の確認点として、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第46問】RBACと認証認可：ServiceAccountの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "ノードの物理シリアル番号である。",
      "コンテナのベースイメージである。",
      "外部DNSの契約名義である。",
      "PodがKubernetes APIへアクセスするためのIDとして使われる。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 設計で採用すべき考え方として、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第47問】RBACと認証認可：ServiceAccountの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "PodがKubernetes APIへアクセスするためのIDとして使われる。",
      "外部DNSの契約名義である。",
      "ノードの物理シリアル番号である。",
      "コンテナのベースイメージである。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 管理者が説明すべき役割として、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第48問】RBACと認証認可：ServiceAccountの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "外部DNSの契約名義である。",
      "コンテナのベースイメージである。",
      "ノードの物理シリアル番号である。",
      "PodがKubernetes APIへアクセスするためのIDとして使われる。"
    ],
    "answer": "PodがKubernetes APIへアクセスするためのIDとして使われる。",
    "explanation": "Podの権限はServiceAccount経由で制御します。 実務で誤解しやすいポイントとして、ServiceAccountの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第49問】RBACと認証認可：cluster-adminの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
      "Namespace作成を禁止する専用ロールである。",
      "読み取り専用の最小権限ロールである。",
      "Podログ閲覧だけを許可するロールである。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 試験対策で重視すべき基本理解として、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第50問】RBACと認証認可：cluster-adminの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "読み取り専用の最小権限ロールである。",
      "Podログ閲覧だけを許可するロールである。",
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
      "Namespace作成を禁止する専用ロールである。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 運用時に注意すべき判断として、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第51問】RBACと認証認可：cluster-adminのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Podログ閲覧だけを許可するロールである。",
      "読み取り専用の最小権限ロールである。",
      "Namespace作成を禁止する専用ロールである。",
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 トラブルシュート時の確認点として、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第52問】RBACと認証認可：cluster-adminの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "読み取り専用の最小権限ロールである。",
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
      "Namespace作成を禁止する専用ロールである。",
      "Podログ閲覧だけを許可するロールである。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 設計で採用すべき考え方として、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第53問】RBACと認証認可：cluster-adminの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Podログ閲覧だけを許可するロールである。",
      "読み取り専用の最小権限ロールである。",
      "Namespace作成を禁止する専用ロールである。",
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 管理者が説明すべき役割として、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第54問】RBACと認証認可：cluster-adminの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
      "読み取り専用の最小権限ロールである。",
      "Podログ閲覧だけを許可するロールである。",
      "Namespace作成を禁止する専用ロールである。"
    ],
    "answer": "クラスタ全体に強い管理権限を持つため、付与は慎重に行う。",
    "explanation": "cluster-adminの乱用は重大なリスクです。 実務で誤解しやすいポイントとして、cluster-adminの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第55問】RBACと認証認可：認可確認の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "kubectl logsでRBACを自動修復できる。",
      "kubectl topでSecretを復号できる。",
      "kubectl auth can-i で現在の権限確認ができる。",
      "kubectl execで監査設定を必ず変更できる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 試験対策で重視すべき基本理解として、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第56問】RBACと認証認可：認可確認の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "kubectl topでSecretを復号できる。",
      "kubectl logsでRBACを自動修復できる。",
      "kubectl auth can-i で現在の権限確認ができる。",
      "kubectl execで監査設定を必ず変更できる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 運用時に注意すべき判断として、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第57問】RBACと認証認可：認可確認のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "kubectl execで監査設定を必ず変更できる。",
      "kubectl logsでRBACを自動修復できる。",
      "kubectl topでSecretを復号できる。",
      "kubectl auth can-i で現在の権限確認ができる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 トラブルシュート時の確認点として、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第58問】RBACと認証認可：認可確認の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "kubectl topでSecretを復号できる。",
      "kubectl execで監査設定を必ず変更できる。",
      "kubectl logsでRBACを自動修復できる。",
      "kubectl auth can-i で現在の権限確認ができる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 設計で採用すべき考え方として、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第59問】RBACと認証認可：認可確認の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "kubectl logsでRBACを自動修復できる。",
      "kubectl execで監査設定を必ず変更できる。",
      "kubectl auth can-i で現在の権限確認ができる。",
      "kubectl topでSecretを復号できる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 管理者が説明すべき役割として、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第60問】RBACと認証認可：認可確認の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "kubectl topでSecretを復号できる。",
      "kubectl auth can-i で現在の権限確認ができる。",
      "kubectl logsでRBACを自動修復できる。",
      "kubectl execで監査設定を必ず変更できる。"
    ],
    "answer": "kubectl auth can-i で現在の権限確認ができる。",
    "explanation": "権限確認はRBAC設計やトラブルシュートに役立ちます。 実務で誤解しやすいポイントとして、認可確認の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第61問】Pod Security：特権コンテナの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "ホストに強い影響を与えるため原則避けるべき設定である。",
      "RBACを不要にする設定である。",
      "常に最も安全な実行方式である。",
      "NetworkPolicyを自動生成する設定である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 試験対策で重視すべき基本理解として、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第62問】Pod Security：特権コンテナの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "ホストに強い影響を与えるため原則避けるべき設定である。",
      "RBACを不要にする設定である。",
      "常に最も安全な実行方式である。",
      "NetworkPolicyを自動生成する設定である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 運用時に注意すべき判断として、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第63問】Pod Security：特権コンテナのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "NetworkPolicyを自動生成する設定である。",
      "常に最も安全な実行方式である。",
      "RBACを不要にする設定である。",
      "ホストに強い影響を与えるため原則避けるべき設定である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 トラブルシュート時の確認点として、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第64問】Pod Security：特権コンテナの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "ホストに強い影響を与えるため原則避けるべき設定である。",
      "RBACを不要にする設定である。",
      "NetworkPolicyを自動生成する設定である。",
      "常に最も安全な実行方式である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 設計で採用すべき考え方として、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第65問】Pod Security：特権コンテナの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "ホストに強い影響を与えるため原則避けるべき設定である。",
      "NetworkPolicyを自動生成する設定である。",
      "常に最も安全な実行方式である。",
      "RBACを不要にする設定である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 管理者が説明すべき役割として、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第66問】Pod Security：特権コンテナの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "常に最も安全な実行方式である。",
      "RBACを不要にする設定である。",
      "ホストに強い影響を与えるため原則避けるべき設定である。",
      "NetworkPolicyを自動生成する設定である。"
    ],
    "answer": "ホストに強い影響を与えるため原則避けるべき設定である。",
    "explanation": "privileged: true は攻撃面を大きく広げます。 実務で誤解しやすいポイントとして、特権コンテナの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第67問】Pod Security：runAsNonRootの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナをroot以外のユーザーで実行するための設定である。",
      "CPU制限を解除する。",
      "Podを必ずホストネットワークへ接続する。",
      "Secretを自動で公開する。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 試験対策で重視すべき基本理解として、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第68問】Pod Security：runAsNonRootの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Podを必ずホストネットワークへ接続する。",
      "コンテナをroot以外のユーザーで実行するための設定である。",
      "Secretを自動で公開する。",
      "CPU制限を解除する。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 運用時に注意すべき判断として、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第69問】Pod Security：runAsNonRootのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Podを必ずホストネットワークへ接続する。",
      "コンテナをroot以外のユーザーで実行するための設定である。",
      "CPU制限を解除する。",
      "Secretを自動で公開する。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 トラブルシュート時の確認点として、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第70問】Pod Security：runAsNonRootの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナをroot以外のユーザーで実行するための設定である。",
      "Podを必ずホストネットワークへ接続する。",
      "Secretを自動で公開する。",
      "CPU制限を解除する。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 設計で採用すべき考え方として、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第71問】Pod Security：runAsNonRootの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "CPU制限を解除する。",
      "Podを必ずホストネットワークへ接続する。",
      "Secretを自動で公開する。",
      "コンテナをroot以外のユーザーで実行するための設定である。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 管理者が説明すべき役割として、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第72問】Pod Security：runAsNonRootの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "Secretを自動で公開する。",
      "Podを必ずホストネットワークへ接続する。",
      "コンテナをroot以外のユーザーで実行するための設定である。",
      "CPU制限を解除する。"
    ],
    "answer": "コンテナをroot以外のユーザーで実行するための設定である。",
    "explanation": "非root実行はコンテナ脱出時の影響低減に役立ちます。 実務で誤解しやすいポイントとして、runAsNonRootの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第73問】Pod Security：readOnlyRootFilesystemの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナを必ずrootで実行する。",
      "API Server認証を無効化する。",
      "全ポートを開放する。",
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 試験対策で重視すべき基本理解として、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第74問】Pod Security：readOnlyRootFilesystemの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
      "API Server認証を無効化する。",
      "全ポートを開放する。",
      "コンテナを必ずrootで実行する。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 運用時に注意すべき判断として、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第75問】Pod Security：readOnlyRootFilesystemのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
      "全ポートを開放する。",
      "コンテナを必ずrootで実行する。",
      "API Server認証を無効化する。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 トラブルシュート時の確認点として、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第76問】Pod Security：readOnlyRootFilesystemの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "全ポートを開放する。",
      "API Server認証を無効化する。",
      "コンテナを必ずrootで実行する。",
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 設計で採用すべき考え方として、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第77問】Pod Security：readOnlyRootFilesystemの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "API Server認証を無効化する。",
      "コンテナを必ずrootで実行する。",
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
      "全ポートを開放する。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 管理者が説明すべき役割として、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第78問】Pod Security：readOnlyRootFilesystemの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "API Server認証を無効化する。",
      "全ポートを開放する。",
      "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
      "コンテナを必ずrootで実行する。"
    ],
    "answer": "ルートファイルシステムを書き込み不可にして改ざんリスクを下げる。",
    "explanation": "不要な書き込みを制限するハードニング設定です。 実務で誤解しやすいポイントとして、readOnlyRootFilesystemの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第79問】Pod Security：capabilitiesの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージを署名する仕組みである。",
      "Linuxケーパビリティを必要最小限に制限する。",
      "全権限を常に追加するのが安全である。",
      "DNS名を短縮する機能である。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 試験対策で重視すべき基本理解として、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第80問】Pod Security：capabilitiesの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Linuxケーパビリティを必要最小限に制限する。",
      "コンテナイメージを署名する仕組みである。",
      "DNS名を短縮する機能である。",
      "全権限を常に追加するのが安全である。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 運用時に注意すべき判断として、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第81問】Pod Security：capabilitiesのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Linuxケーパビリティを必要最小限に制限する。",
      "コンテナイメージを署名する仕組みである。",
      "全権限を常に追加するのが安全である。",
      "DNS名を短縮する機能である。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 トラブルシュート時の確認点として、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第82問】Pod Security：capabilitiesの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージを署名する仕組みである。",
      "全権限を常に追加するのが安全である。",
      "Linuxケーパビリティを必要最小限に制限する。",
      "DNS名を短縮する機能である。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 設計で採用すべき考え方として、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第83問】Pod Security：capabilitiesの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "全権限を常に追加するのが安全である。",
      "コンテナイメージを署名する仕組みである。",
      "DNS名を短縮する機能である。",
      "Linuxケーパビリティを必要最小限に制限する。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 管理者が説明すべき役割として、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第84問】Pod Security：capabilitiesの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "全権限を常に追加するのが安全である。",
      "Linuxケーパビリティを必要最小限に制限する。",
      "DNS名を短縮する機能である。",
      "コンテナイメージを署名する仕組みである。"
    ],
    "answer": "Linuxケーパビリティを必要最小限に制限する。",
    "explanation": "不要なCAP_SYS_ADMINなどは削除すべきです。 実務で誤解しやすいポイントとして、capabilitiesの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第85問】Pod Security：Pod Security Standardsの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "ノードのハードウェア規格である。",
      "Gitブランチ命名規則である。",
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
      "クラウド請求の割引階層である。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 試験対策で重視すべき基本理解として、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第86問】Pod Security：Pod Security Standardsの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "ノードのハードウェア規格である。",
      "クラウド請求の割引階層である。",
      "Gitブランチ命名規則である。",
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 運用時に注意すべき判断として、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第87問】Pod Security：Pod Security Standardsのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
      "ノードのハードウェア規格である。",
      "Gitブランチ命名規則である。",
      "クラウド請求の割引階層である。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 トラブルシュート時の確認点として、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第88問】Pod Security：Pod Security Standardsの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "Gitブランチ命名規則である。",
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
      "クラウド請求の割引階層である。",
      "ノードのハードウェア規格である。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 設計で採用すべき考え方として、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第89問】Pod Security：Pod Security Standardsの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "クラウド請求の割引階層である。",
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
      "Gitブランチ命名規則である。",
      "ノードのハードウェア規格である。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 管理者が説明すべき役割として、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第90問】Pod Security：Pod Security Standardsの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "クラウド請求の割引階層である。",
      "Gitブランチ命名規則である。",
      "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
      "ノードのハードウェア規格である。"
    ],
    "answer": "Privileged、Baseline、Restrictedのようなセキュリティ水準を示す。",
    "explanation": "Pod Security Admissionで適用できます。 実務で誤解しやすいポイントとして、Pod Security Standardsの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第91問】Network Security：NetworkPolicyの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "Pod間や外部との通信を制御するためのリソースである。",
      "RBACロールを作るコマンドである。",
      "コンテナをビルドするツールである。",
      "Secretを自動暗号化する機能である。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 試験対策で重視すべき基本理解として、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第92問】Network Security：NetworkPolicyの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "RBACロールを作るコマンドである。",
      "Pod間や外部との通信を制御するためのリソースである。",
      "Secretを自動暗号化する機能である。",
      "コンテナをビルドするツールである。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 運用時に注意すべき判断として、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第93問】Network Security：NetworkPolicyのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "RBACロールを作るコマンドである。",
      "コンテナをビルドするツールである。",
      "Pod間や外部との通信を制御するためのリソースである。",
      "Secretを自動暗号化する機能である。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 トラブルシュート時の確認点として、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第94問】Network Security：NetworkPolicyの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナをビルドするツールである。",
      "Secretを自動暗号化する機能である。",
      "RBACロールを作るコマンドである。",
      "Pod間や外部との通信を制御するためのリソースである。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 設計で採用すべき考え方として、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第95問】Network Security：NetworkPolicyの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナをビルドするツールである。",
      "Secretを自動暗号化する機能である。",
      "RBACロールを作るコマンドである。",
      "Pod間や外部との通信を制御するためのリソースである。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 管理者が説明すべき役割として、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第96問】Network Security：NetworkPolicyの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "コンテナをビルドするツールである。",
      "Secretを自動暗号化する機能である。",
      "Pod間や外部との通信を制御するためのリソースである。",
      "RBACロールを作るコマンドである。"
    ],
    "answer": "Pod間や外部との通信を制御するためのリソースである。",
    "explanation": "許可リスト方式で通信を絞る設計が重要です。 実務で誤解しやすいポイントとして、NetworkPolicyの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第97問】Network Security：デフォルト拒否の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを削除する。",
      "すべてのPod間通信を無条件で許可する。",
      "明示的に許可した通信だけを通す安全な設計である。",
      "API Serverを匿名公開する。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 試験対策で重視すべき基本理解として、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第98問】Network Security：デフォルト拒否の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "API Serverを匿名公開する。",
      "監査ログを削除する。",
      "明示的に許可した通信だけを通す安全な設計である。",
      "すべてのPod間通信を無条件で許可する。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 運用時に注意すべき判断として、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第99問】Network Security：デフォルト拒否のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを削除する。",
      "明示的に許可した通信だけを通す安全な設計である。",
      "API Serverを匿名公開する。",
      "すべてのPod間通信を無条件で許可する。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 トラブルシュート時の確認点として、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第100問】Network Security：デフォルト拒否の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを削除する。",
      "すべてのPod間通信を無条件で許可する。",
      "API Serverを匿名公開する。",
      "明示的に許可した通信だけを通す安全な設計である。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 設計で採用すべき考え方として、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第101問】Network Security：デフォルト拒否の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "API Serverを匿名公開する。",
      "監査ログを削除する。",
      "すべてのPod間通信を無条件で許可する。",
      "明示的に許可した通信だけを通す安全な設計である。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 管理者が説明すべき役割として、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第102問】Network Security：デフォルト拒否の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "API Serverを匿名公開する。",
      "明示的に許可した通信だけを通す安全な設計である。",
      "監査ログを削除する。",
      "すべてのPod間通信を無条件で許可する。"
    ],
    "answer": "明示的に許可した通信だけを通す安全な設計である。",
    "explanation": "NetworkPolicyではまずdeny-allを置く設計がよく使われます。 実務で誤解しやすいポイントとして、デフォルト拒否の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第103問】Network Security：mTLSの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "NodePortを全開放する。",
      "通信を平文化する。",
      "SecretをGitへ保存する。",
      "サービス間通信を相互認証付きで暗号化する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 試験対策で重視すべき基本理解として、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第104問】Network Security：mTLSの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "SecretをGitへ保存する。",
      "サービス間通信を相互認証付きで暗号化する。",
      "NodePortを全開放する。",
      "通信を平文化する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 運用時に注意すべき判断として、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第105問】Network Security：mTLSのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "NodePortを全開放する。",
      "SecretをGitへ保存する。",
      "通信を平文化する。",
      "サービス間通信を相互認証付きで暗号化する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 トラブルシュート時の確認点として、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第106問】Network Security：mTLSの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "サービス間通信を相互認証付きで暗号化する。",
      "SecretをGitへ保存する。",
      "通信を平文化する。",
      "NodePortを全開放する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 設計で採用すべき考え方として、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第107問】Network Security：mTLSの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "通信を平文化する。",
      "SecretをGitへ保存する。",
      "サービス間通信を相互認証付きで暗号化する。",
      "NodePortを全開放する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 管理者が説明すべき役割として、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第108問】Network Security：mTLSの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "NodePortを全開放する。",
      "サービス間通信を相互認証付きで暗号化する。",
      "SecretをGitへ保存する。",
      "通信を平文化する。"
    ],
    "answer": "サービス間通信を相互認証付きで暗号化する。",
    "explanation": "サービスメッシュなどでmTLSを利用できます。 実務で誤解しやすいポイントとして、mTLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第109問】Network Security：API Server公開範囲の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "管理APIへのアクセス元を制限することが望ましい。",
      "インターネット全体へ匿名で公開する。",
      "認証を無効化する。",
      "監査ログを保存しない。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 試験対策で重視すべき基本理解として、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第110問】Network Security：API Server公開範囲の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "監査ログを保存しない。",
      "インターネット全体へ匿名で公開する。",
      "管理APIへのアクセス元を制限することが望ましい。",
      "認証を無効化する。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 運用時に注意すべき判断として、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第111問】Network Security：API Server公開範囲のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "インターネット全体へ匿名で公開する。",
      "管理APIへのアクセス元を制限することが望ましい。",
      "監査ログを保存しない。",
      "認証を無効化する。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 トラブルシュート時の確認点として、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第112問】Network Security：API Server公開範囲の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "認証を無効化する。",
      "管理APIへのアクセス元を制限することが望ましい。",
      "インターネット全体へ匿名で公開する。",
      "監査ログを保存しない。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 設計で採用すべき考え方として、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第113問】Network Security：API Server公開範囲の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "インターネット全体へ匿名で公開する。",
      "認証を無効化する。",
      "監査ログを保存しない。",
      "管理APIへのアクセス元を制限することが望ましい。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 管理者が説明すべき役割として、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第114問】Network Security：API Server公開範囲の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "認証を無効化する。",
      "管理APIへのアクセス元を制限することが望ましい。",
      "インターネット全体へ匿名で公開する。",
      "監査ログを保存しない。"
    ],
    "answer": "管理APIへのアクセス元を制限することが望ましい。",
    "explanation": "API Serverはクラスタの最重要管理面です。 実務で誤解しやすいポイントとして、API Server公開範囲の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第115問】Network Security：Ingress TLSの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "Podをrootで実行する設定である。",
      "etcdを停止する設定である。",
      "RBACを削除する設定である。",
      "外部からのHTTP通信をTLSで保護する。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 試験対策で重視すべき基本理解として、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第116問】Network Security：Ingress TLSの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Podをrootで実行する設定である。",
      "外部からのHTTP通信をTLSで保護する。",
      "RBACを削除する設定である。",
      "etcdを停止する設定である。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 運用時に注意すべき判断として、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第117問】Network Security：Ingress TLSのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "RBACを削除する設定である。",
      "Podをrootで実行する設定である。",
      "外部からのHTTP通信をTLSで保護する。",
      "etcdを停止する設定である。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 トラブルシュート時の確認点として、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第118問】Network Security：Ingress TLSの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "etcdを停止する設定である。",
      "外部からのHTTP通信をTLSで保護する。",
      "Podをrootで実行する設定である。",
      "RBACを削除する設定である。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 設計で採用すべき考え方として、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第119問】Network Security：Ingress TLSの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Podをrootで実行する設定である。",
      "RBACを削除する設定である。",
      "外部からのHTTP通信をTLSで保護する。",
      "etcdを停止する設定である。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 管理者が説明すべき役割として、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第120問】Network Security：Ingress TLSの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "etcdを停止する設定である。",
      "外部からのHTTP通信をTLSで保護する。",
      "Podをrootで実行する設定である。",
      "RBACを削除する設定である。"
    ],
    "answer": "外部からのHTTP通信をTLSで保護する。",
    "explanation": "証明書管理とHTTPS化は基本的な入口防御です。 実務で誤解しやすいポイントとして、Ingress TLSの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第121問】Supply Chain Security：イメージスキャンの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "RBACを自動で無効化する。",
      "クラスタの料金を計算する。",
      "コンテナイメージ内の脆弱性を検出する。",
      "Pod間通信をすべて許可する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 試験対策で重視すべき基本理解として、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第122問】Supply Chain Security：イメージスキャンの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Pod間通信をすべて許可する。",
      "クラスタの料金を計算する。",
      "RBACを自動で無効化する。",
      "コンテナイメージ内の脆弱性を検出する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 運用時に注意すべき判断として、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第123問】Supply Chain Security：イメージスキャンのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージ内の脆弱性を検出する。",
      "クラスタの料金を計算する。",
      "RBACを自動で無効化する。",
      "Pod間通信をすべて許可する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 トラブルシュート時の確認点として、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第124問】Supply Chain Security：イメージスキャンの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージ内の脆弱性を検出する。",
      "RBACを自動で無効化する。",
      "Pod間通信をすべて許可する。",
      "クラスタの料金を計算する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 設計で採用すべき考え方として、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第125問】Supply Chain Security：イメージスキャンの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "RBACを自動で無効化する。",
      "クラスタの料金を計算する。",
      "Pod間通信をすべて許可する。",
      "コンテナイメージ内の脆弱性を検出する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 管理者が説明すべき役割として、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第126問】Supply Chain Security：イメージスキャンの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "クラスタの料金を計算する。",
      "Pod間通信をすべて許可する。",
      "RBACを自動で無効化する。",
      "コンテナイメージ内の脆弱性を検出する。"
    ],
    "answer": "コンテナイメージ内の脆弱性を検出する。",
    "explanation": "CI/CDでスキャンを組み込むと早期検出できます。 実務で誤解しやすいポイントとして、イメージスキャンの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第127問】Supply Chain Security：イメージ署名の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "イメージの改ざんや出所を検証するために使う。",
      "NetworkPolicyを無効化する。",
      "コンテナのCPU使用率を固定する。",
      "Namespaceを削除する。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 試験対策で重視すべき基本理解として、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第128問】Supply Chain Security：イメージ署名の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Namespaceを削除する。",
      "コンテナのCPU使用率を固定する。",
      "NetworkPolicyを無効化する。",
      "イメージの改ざんや出所を検証するために使う。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 運用時に注意すべき判断として、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第129問】Supply Chain Security：イメージ署名のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナのCPU使用率を固定する。",
      "イメージの改ざんや出所を検証するために使う。",
      "Namespaceを削除する。",
      "NetworkPolicyを無効化する。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 トラブルシュート時の確認点として、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第130問】Supply Chain Security：イメージ署名の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "NetworkPolicyを無効化する。",
      "Namespaceを削除する。",
      "イメージの改ざんや出所を検証するために使う。",
      "コンテナのCPU使用率を固定する。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 設計で採用すべき考え方として、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第131問】Supply Chain Security：イメージ署名の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "NetworkPolicyを無効化する。",
      "イメージの改ざんや出所を検証するために使う。",
      "Namespaceを削除する。",
      "コンテナのCPU使用率を固定する。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 管理者が説明すべき役割として、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第132問】Supply Chain Security：イメージ署名の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "イメージの改ざんや出所を検証するために使う。",
      "コンテナのCPU使用率を固定する。",
      "Namespaceを削除する。",
      "NetworkPolicyを無効化する。"
    ],
    "answer": "イメージの改ざんや出所を検証するために使う。",
    "explanation": "署名検証はサプライチェーン防御の重要要素です。 実務で誤解しやすいポイントとして、イメージ署名の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第133問】Supply Chain Security：SBOMの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "PodのIPアドレス表である。",
      "ソフトウェア構成部品表として依存関係を可視化する。",
      "Ingressのルーティング規則である。",
      "クラウド請求の支払い方法である。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 試験対策で重視すべき基本理解として、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第134問】Supply Chain Security：SBOMの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "PodのIPアドレス表である。",
      "ソフトウェア構成部品表として依存関係を可視化する。",
      "Ingressのルーティング規則である。",
      "クラウド請求の支払い方法である。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 運用時に注意すべき判断として、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第135問】Supply Chain Security：SBOMのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "PodのIPアドレス表である。",
      "クラウド請求の支払い方法である。",
      "Ingressのルーティング規則である。",
      "ソフトウェア構成部品表として依存関係を可視化する。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 トラブルシュート時の確認点として、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第136問】Supply Chain Security：SBOMの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "クラウド請求の支払い方法である。",
      "PodのIPアドレス表である。",
      "ソフトウェア構成部品表として依存関係を可視化する。",
      "Ingressのルーティング規則である。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 設計で採用すべき考え方として、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第137問】Supply Chain Security：SBOMの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Ingressのルーティング規則である。",
      "ソフトウェア構成部品表として依存関係を可視化する。",
      "PodのIPアドレス表である。",
      "クラウド請求の支払い方法である。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 管理者が説明すべき役割として、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第138問】Supply Chain Security：SBOMの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "Ingressのルーティング規則である。",
      "クラウド請求の支払い方法である。",
      "ソフトウェア構成部品表として依存関係を可視化する。",
      "PodのIPアドレス表である。"
    ],
    "answer": "ソフトウェア構成部品表として依存関係を可視化する。",
    "explanation": "依存ライブラリ把握や脆弱性対応に役立ちます。 実務で誤解しやすいポイントとして、SBOMの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第139問】Supply Chain Security：Admission Controlの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "DNSを完全に削除する仕組みである。",
      "etcdをバックアップする専用ツールである。",
      "リソース作成時にポリシー検査や変更を行う仕組みである。",
      "Podログを圧縮するだけの仕組みである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 試験対策で重視すべき基本理解として、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第140問】Supply Chain Security：Admission Controlの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "Podログを圧縮するだけの仕組みである。",
      "etcdをバックアップする専用ツールである。",
      "DNSを完全に削除する仕組みである。",
      "リソース作成時にポリシー検査や変更を行う仕組みである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 運用時に注意すべき判断として、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第141問】Supply Chain Security：Admission Controlのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "リソース作成時にポリシー検査や変更を行う仕組みである。",
      "DNSを完全に削除する仕組みである。",
      "Podログを圧縮するだけの仕組みである。",
      "etcdをバックアップする専用ツールである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 トラブルシュート時の確認点として、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第142問】Supply Chain Security：Admission Controlの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "リソース作成時にポリシー検査や変更を行う仕組みである。",
      "DNSを完全に削除する仕組みである。",
      "Podログを圧縮するだけの仕組みである。",
      "etcdをバックアップする専用ツールである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 設計で採用すべき考え方として、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第143問】Supply Chain Security：Admission Controlの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "etcdをバックアップする専用ツールである。",
      "Podログを圧縮するだけの仕組みである。",
      "DNSを完全に削除する仕組みである。",
      "リソース作成時にポリシー検査や変更を行う仕組みである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 管理者が説明すべき役割として、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第144問】Supply Chain Security：Admission Controlの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "Podログを圧縮するだけの仕組みである。",
      "リソース作成時にポリシー検査や変更を行う仕組みである。",
      "DNSを完全に削除する仕組みである。",
      "etcdをバックアップする専用ツールである。"
    ],
    "answer": "リソース作成時にポリシー検査や変更を行う仕組みである。",
    "explanation": "OPA GatekeeperやKyvernoなどでポリシーを適用できます。 実務で誤解しやすいポイントとして、Admission Controlの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第145問】Supply Chain Security：信頼できるベースイメージの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "出所が明確で更新されているイメージを利用する。",
      "古い脆弱イメージを使い続ける。",
      "署名検証を禁止する。",
      "不明なイメージをlatest固定で使う。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 試験対策で重視すべき基本理解として、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第146問】Supply Chain Security：信頼できるベースイメージの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "不明なイメージをlatest固定で使う。",
      "署名検証を禁止する。",
      "出所が明確で更新されているイメージを利用する。",
      "古い脆弱イメージを使い続ける。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 運用時に注意すべき判断として、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第147問】Supply Chain Security：信頼できるベースイメージのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "出所が明確で更新されているイメージを利用する。",
      "古い脆弱イメージを使い続ける。",
      "不明なイメージをlatest固定で使う。",
      "署名検証を禁止する。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 トラブルシュート時の確認点として、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第148問】Supply Chain Security：信頼できるベースイメージの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "出所が明確で更新されているイメージを利用する。",
      "古い脆弱イメージを使い続ける。",
      "署名検証を禁止する。",
      "不明なイメージをlatest固定で使う。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 設計で採用すべき考え方として、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第149問】Supply Chain Security：信頼できるベースイメージの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "出所が明確で更新されているイメージを利用する。",
      "署名検証を禁止する。",
      "不明なイメージをlatest固定で使う。",
      "古い脆弱イメージを使い続ける。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 管理者が説明すべき役割として、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第150問】Supply Chain Security：信頼できるベースイメージの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "出所が明確で更新されているイメージを利用する。",
      "古い脆弱イメージを使い続ける。",
      "署名検証を禁止する。",
      "不明なイメージをlatest固定で使う。"
    ],
    "answer": "出所が明確で更新されているイメージを利用する。",
    "explanation": "ベースイメージ選定は脆弱性リスクに直結します。 実務で誤解しやすいポイントとして、信頼できるベースイメージの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第151問】監査とインシデント対応：監査ログの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "誰がいつ何をしたかを追跡するための記録である。",
      "Podのメモリ上限だけを示す。",
      "DNSキャッシュのTTLである。",
      "コンテナイメージの圧縮率である。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 試験対策で重視すべき基本理解として、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第152問】監査とインシデント対応：監査ログの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージの圧縮率である。",
      "Podのメモリ上限だけを示す。",
      "DNSキャッシュのTTLである。",
      "誰がいつ何をしたかを追跡するための記録である。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 運用時に注意すべき判断として、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第153問】監査とインシデント対応：監査ログのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージの圧縮率である。",
      "Podのメモリ上限だけを示す。",
      "DNSキャッシュのTTLである。",
      "誰がいつ何をしたかを追跡するための記録である。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 トラブルシュート時の確認点として、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第154問】監査とインシデント対応：監査ログの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "誰がいつ何をしたかを追跡するための記録である。",
      "DNSキャッシュのTTLである。",
      "コンテナイメージの圧縮率である。",
      "Podのメモリ上限だけを示す。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 設計で採用すべき考え方として、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第155問】監査とインシデント対応：監査ログの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "誰がいつ何をしたかを追跡するための記録である。",
      "コンテナイメージの圧縮率である。",
      "DNSキャッシュのTTLである。",
      "Podのメモリ上限だけを示す。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 管理者が説明すべき役割として、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第156問】監査とインシデント対応：監査ログの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "コンテナイメージの圧縮率である。",
      "誰がいつ何をしたかを追跡するための記録である。",
      "DNSキャッシュのTTLである。",
      "Podのメモリ上限だけを示す。"
    ],
    "answer": "誰がいつ何をしたかを追跡するための記録である。",
    "explanation": "不正操作や事故の調査に必要です。 実務で誤解しやすいポイントとして、監査ログの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第157問】監査とインシデント対応：etcd保護の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "暗号化を禁止する。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "バックアップを一切取らない。",
      "etcdを匿名公開する。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 試験対策で重視すべき基本理解として、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第158問】監査とインシデント対応：etcd保護の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "etcdを匿名公開する。",
      "暗号化を禁止する。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "バックアップを一切取らない。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 運用時に注意すべき判断として、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第159問】監査とインシデント対応：etcd保護のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "バックアップを一切取らない。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "etcdを匿名公開する。",
      "暗号化を禁止する。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 トラブルシュート時の確認点として、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第160問】監査とインシデント対応：etcd保護の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "バックアップを一切取らない。",
      "暗号化を禁止する。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "etcdを匿名公開する。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 設計で採用すべき考え方として、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第161問】監査とインシデント対応：etcd保護の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "バックアップを一切取らない。",
      "暗号化を禁止する。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "etcdを匿名公開する。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 管理者が説明すべき役割として、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第162問】監査とインシデント対応：etcd保護の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "バックアップを一切取らない。",
      "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
      "etcdを匿名公開する。",
      "暗号化を禁止する。"
    ],
    "answer": "暗号化、アクセス制限、バックアップによりクラスタ状態を守る。",
    "explanation": "etcdにはSecretを含む重要なクラスタ状態が保存されます。 実務で誤解しやすいポイントとして、etcd保護の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第163問】監査とインシデント対応：Secret管理の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "Secretの利用履歴を無視する。",
      "機密情報を適切に保管し、不要な露出を避ける。",
      "全Podへ全Secretをマウントする。",
      "Secretを平文で公開リポジトリへ置く。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 試験対策で重視すべき基本理解として、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第164問】監査とインシデント対応：Secret管理の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "機密情報を適切に保管し、不要な露出を避ける。",
      "全Podへ全Secretをマウントする。",
      "Secretの利用履歴を無視する。",
      "Secretを平文で公開リポジトリへ置く。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 運用時に注意すべき判断として、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第165問】監査とインシデント対応：Secret管理のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "Secretを平文で公開リポジトリへ置く。",
      "Secretの利用履歴を無視する。",
      "機密情報を適切に保管し、不要な露出を避ける。",
      "全Podへ全Secretをマウントする。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 トラブルシュート時の確認点として、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第166問】監査とインシデント対応：Secret管理の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "全Podへ全Secretをマウントする。",
      "機密情報を適切に保管し、不要な露出を避ける。",
      "Secretを平文で公開リポジトリへ置く。",
      "Secretの利用履歴を無視する。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 設計で採用すべき考え方として、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第167問】監査とインシデント対応：Secret管理の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "Secretの利用履歴を無視する。",
      "機密情報を適切に保管し、不要な露出を避ける。",
      "Secretを平文で公開リポジトリへ置く。",
      "全Podへ全Secretをマウントする。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 管理者が説明すべき役割として、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第168問】監査とインシデント対応：Secret管理の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "全Podへ全Secretをマウントする。",
      "機密情報を適切に保管し、不要な露出を避ける。",
      "Secretを平文で公開リポジトリへ置く。",
      "Secretの利用履歴を無視する。"
    ],
    "answer": "機密情報を適切に保管し、不要な露出を避ける。",
    "explanation": "外部Secret管理や暗号化も検討します。 実務で誤解しやすいポイントとして、Secret管理の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第169問】監査とインシデント対応：侵害時対応の試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "最初に全ログを削除する。",
      "攻撃元へパスワードを送る。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
      "検知ルールを無効化する。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 試験対策で重視すべき基本理解として、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第170問】監査とインシデント対応：侵害時対応の運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "検知ルールを無効化する。",
      "最初に全ログを削除する。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
      "攻撃元へパスワードを送る。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 運用時に注意すべき判断として、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第171問】監査とインシデント対応：侵害時対応のトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "攻撃元へパスワードを送る。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
      "最初に全ログを削除する。",
      "検知ルールを無効化する。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 トラブルシュート時の確認点として、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第172問】監査とインシデント対応：侵害時対応の設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "最初に全ログを削除する。",
      "攻撃元へパスワードを送る。",
      "検知ルールを無効化する。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 設計で採用すべき考え方として、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第173問】監査とインシデント対応：侵害時対応の管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "検知ルールを無効化する。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
      "攻撃元へパスワードを送る。",
      "最初に全ログを削除する。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 管理者が説明すべき役割として、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第174問】監査とインシデント対応：侵害時対応の実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "攻撃元へパスワードを送る。",
      "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
      "最初に全ログを削除する。",
      "検知ルールを無効化する。"
    ],
    "answer": "影響範囲の隔離、証拠保全、認証情報ローテーションを行う。",
    "explanation": "インシデント時は拡大防止と証拠保全が重要です。 実務で誤解しやすいポイントとして、侵害時対応の役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第175問】監査とインシデント対応：継続的ハードニングの試験対策で重視すべき基本理解について、最も適切な説明はどれですか？",
    "choices": [
      "一度設定したら永遠に確認しない。",
      "パッチ適用を禁止する。",
      "設定や脆弱性を定期的に見直し改善する。",
      "監査結果を無視する。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 試験対策で重視すべき基本理解として、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第176問】監査とインシデント対応：継続的ハードニングの運用時に注意すべき判断について、最も適切な説明はどれですか？",
    "choices": [
      "設定や脆弱性を定期的に見直し改善する。",
      "パッチ適用を禁止する。",
      "一度設定したら永遠に確認しない。",
      "監査結果を無視する。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 運用時に注意すべき判断として、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第177問】監査とインシデント対応：継続的ハードニングのトラブルシュート時の確認点について、最も適切な説明はどれですか？",
    "choices": [
      "監査結果を無視する。",
      "パッチ適用を禁止する。",
      "設定や脆弱性を定期的に見直し改善する。",
      "一度設定したら永遠に確認しない。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 トラブルシュート時の確認点として、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第178問】監査とインシデント対応：継続的ハードニングの設計で採用すべき考え方について、最も適切な説明はどれですか？",
    "choices": [
      "パッチ適用を禁止する。",
      "監査結果を無視する。",
      "一度設定したら永遠に確認しない。",
      "設定や脆弱性を定期的に見直し改善する。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 設計で採用すべき考え方として、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第179問】監査とインシデント対応：継続的ハードニングの管理者が説明すべき役割について、最も適切な説明はどれですか？",
    "choices": [
      "一度設定したら永遠に確認しない。",
      "設定や脆弱性を定期的に見直し改善する。",
      "監査結果を無視する。",
      "パッチ適用を禁止する。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 管理者が説明すべき役割として、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  },
  {
    "question": "【CNCF KCSA 第180問】監査とインシデント対応：継続的ハードニングの実務で誤解しやすいポイントについて、最も適切な説明はどれですか？",
    "choices": [
      "監査結果を無視する。",
      "パッチ適用を禁止する。",
      "設定や脆弱性を定期的に見直し改善する。",
      "一度設定したら永遠に確認しない。"
    ],
    "answer": "設定や脆弱性を定期的に見直し改善する。",
    "explanation": "クラスタ状態は変化するため継続的な見直しが必要です。 実務で誤解しやすいポイントとして、継続的ハードニングの役割と対象範囲を押さえることが重要です。"
  }
];
